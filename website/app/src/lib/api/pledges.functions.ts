import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../bindings.server";

export const HABITS = [
  "Plan before I start",
  "Stop when unsure",
  "Speak up and report",
  "No shortcuts",
  "Look out for others",
] as const;

export type Pledge = {
  id: number;
  name: string;
  team: string | null;
  reason: string;
  habit: string;
  created_at: string;
};

export type PledgeWall = { count: number; pledges: Pledge[]; online: boolean };

const SCHEMA = `CREATE TABLE IF NOT EXISTS pledges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT,
  reason TEXT NOT NULL,
  habit TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
)`;

// Collapse whitespace and strip control characters from visitor input.
function clean(value: string) {
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim();
}

const hasLink = (value: string) => /(https?:\/\/|www\.|\.[a-z]{2,4}\/)/i.test(value);

export const listPledges = createServerFn({ method: "GET" }).handler(
  async (): Promise<PledgeWall> => {
    const { DB } = bindings();
    if (!DB) return { count: 0, pledges: [], online: false };
    await DB.prepare(SCHEMA).run();
    const total = await DB.prepare("SELECT COUNT(*) AS n FROM pledges").first<{ n: number }>();
    const rows = await DB.prepare(
      "SELECT id, name, team, reason, habit, created_at FROM pledges ORDER BY id DESC LIMIT 24",
    ).all<Pledge>();
    return { count: total?.n ?? 0, pledges: rows.results ?? [], online: true };
  },
);

export const addPledge = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string().min(2).max(60),
      team: z.string().max(60).optional(),
      reason: z.string().min(3).max(180),
      habit: z.enum(HABITS),
    }),
  )
  .handler(async ({ data }) => {
    const { DB } = bindings();
    if (!DB) return { ok: false as const, error: "The pledge wall is offline right now." };
    const name = clean(data.name);
    const team = data.team ? clean(data.team) : "";
    const reason = clean(data.reason);
    if (name.length < 2 || reason.length < 3) {
      return { ok: false as const, error: "Please add your name and your reason." };
    }
    if (hasLink(name) || hasLink(team) || hasLink(reason)) {
      return { ok: false as const, error: "Links are not allowed on the pledge wall." };
    }
    await DB.prepare(SCHEMA).run();
    await DB.prepare("INSERT INTO pledges (name, team, reason, habit) VALUES (?, ?, ?, ?)")
      .bind(name, team || null, reason, data.habit)
      .run();
    return { ok: true as const };
  });
