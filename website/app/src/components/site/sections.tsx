import { useEffect, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { useRouter } from "@tanstack/react-router";

import { addPledge, HABITS } from "@/lib/api/pledges.functions";
import type { PledgeWall } from "@/lib/api/pledges.functions";

import "./site.css";

type IconName =
  | "megaphone"
  | "helmet"
  | "target"
  | "home"
  | "people"
  | "heart"
  | "clipboard"
  | "hand"
  | "speak"
  | "barrier"
  | "handshake"
  | "chat"
  | "person"
  | "stopwatch"
  | "bulb";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const style = { "--icon": `url(/assets/icons/${name}.png)` } as CSSProperties;
  return <span aria-hidden="true" className={["sw-icon", className].filter(Boolean).join(" ")} style={style} />;
}

function SectionHead({ id, index, title, lead }: { id: string; index: string; title: string; lead?: string }) {
  return (
    <header className="sw-head">
      <span className="sw-head__index">{index}</span>
      <h2 className="sw-head__title" id={id}>
        {title}
      </h2>
      {lead ? <p className="sw-head__lead">{lead}</p> : null}
    </header>
  );
}

/* ---------- Header ---------- */

const NAV = [
  { href: "/#why", label: "Why" },
  { href: "/#habits", label: "Habits" },
  { href: "/#take-5", label: "Take 5" },
  { href: "/day-3", label: "Day 3" },
  { href: "/#week", label: "The week" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sw-nav" data-scrolled={scrolled ? "true" : "false"}>
      <a className="sw-nav__brand" href="/" aria-label="AtkinsRéalis Safety Week 2026, home">
        <img src="/assets/brand/logo-white.png" alt="AtkinsRéalis" width={694} height={99} />
        <span className="sw-nav__event">Safety Week 2026</span>
      </a>
      <nav aria-label="Sections" className="sw-nav__links">
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="sw-nav__pledge" href="/#pledge">
        Make your pledge <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}

export function ChapterActions() {
  return (
    <div className="sw-chapter-cta">
      <a className="sw-chapter-cta__primary" href="/#pledge">
        Sign the pledge wall <span aria-hidden="true">→</span>
      </a>
      <a className="sw-chapter-cta__ghost" href="/#week">
        See the week
      </a>
    </div>
  );
}

/* ---------- Welcome ---------- */

const BRIEFING: { icon: IconName; label: string; text: string }[] = [
  {
    icon: "megaphone",
    label: "Welcome",
    text: "AtkinsRéalis Safety Week 2026 runs from 4th to 8th October. Five days, one shared theme: Why I Work Safely.",
  },
  {
    icon: "helmet",
    label: "Today's theme",
    text: "How I Work Safely: the everyday choices, habits and conversations that protect us, our colleagues and our families.",
  },
  {
    icon: "target",
    label: "Today's goal",
    text: "Know your personal why, practise five safe habits every day, and make your own Safety Pledge.",
  },
];

export function Welcome() {
  return (
    <section className="sw-welcome" id="welcome" aria-labelledby="welcome-title">
      <div className="sw-welcome__copy">
        <p className="sw-welcome__date">Sunday 4 October 2026 · Day 01 · Campaign launch</p>
        <h2 className="sw-welcome__title" id="welcome-title">
          How I Work <em>Safely.</em>
        </h2>
        <p className="sw-welcome__intro">
          The Way I Work Safely campaign launches the week for the Program Management Service on the
          Operation and Maintenance of Riyadh Metro. It starts with you, and with the reason you go home.
        </p>
        <ul className="sw-welcome__tiles">
          {BRIEFING.map((item) => (
            <li key={item.label}>
              <Icon name={item.icon} />
              <div>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figure className="sw-welcome__art">
        <img src="/assets/brand/crew.png" alt="Two colleagues in magenta hard hats and high visibility vests on site" width={1308} height={718} />
        <img className="sw-welcome__badge" src="/assets/brand/badge.png" alt="Why I Work Safely campaign badge" width={1255} height={637} />
      </figure>
    </section>
  );
}

/* ---------- Day 3 teaser ---------- */

export function Day3Teaser() {
  return (
    <section className="sw-teaser" aria-labelledby="teaser-title">
      <a href="/day-3" className="sw-teaser__card">
        <span className="sw-teaser__day" aria-hidden="true">
          <small>Day</small>03
        </span>
        <span className="sw-teaser__copy">
          <span className="sw-teaser__when">Tuesday 6 October · Now on the site</span>
          <span className="sw-teaser__title" id="teaser-title">
            Situational Awareness &amp; Personal Safety
          </span>
          <span className="sw-teaser__sub">Stay Alert, Stay Safe. Emergency numbers, levels of alertness and the Awareness Challenge.</span>
        </span>
        <span className="sw-teaser__go" aria-hidden="true">→</span>
      </a>
    </section>
  );
}

/* ---------- Why ---------- */

const WHY: { icon: IconName; title: string; text: string }[] = [
  { icon: "home", title: "My family", text: "Every decision I make at work reaches home, to the people who count on me." },
  { icon: "people", title: "My colleagues", text: "What I do, or don't do, can affect the person working next to me." },
  { icon: "heart", title: "Myself", text: "My health, my future and my ability to keep doing the work I enjoy." },
];

export function Why() {
  return (
    <section className="sw-why" id="why" aria-labelledby="why-title">
      <p className="sw-why__eyebrow">Why I work safely</p>
      <h2 className="sw-why__statement" id="why-title">
        Every safe choice ends at <span>home</span>.
      </h2>
      <p className="sw-why__sub">
        Safety is not a rule we follow for the company. It is a promise we keep to the people who matter most.
      </p>
      <ol className="sw-why__triad">
        {WHY.map((item, i) => (
          <li key={item.title}>
            <span className="sw-why__num">0{i + 1}</span>
            <Icon name={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- Culture ---------- */

const STAGES = [
  { stage: "Reactive", text: "Safety by instinct. We react only after something goes wrong.", quote: "" },
  { stage: "Dependent", text: "Safety through rules and supervision.", quote: "I'm safe because I'm told to be." },
  { stage: "Independent", text: "Personal commitment.", quote: "I'm safe because I choose to be." },
  { stage: "Interdependent", text: "We look after each other.", quote: "We're safe because we care about each other." },
];

export function Culture() {
  return (
    <section className="sw-culture" id="culture" aria-labelledby="culture-title">
      <SectionHead
        id="culture-title"
        index="02"
        title="From compliance to commitment"
        lead="Where is our safety culture today, and where do we want it to be?"
      />
      <ol className="sw-stairs">
        {STAGES.map((s, i) => (
          <li key={s.stage} className="sw-stairs__step" data-goal={i >= 2 ? "true" : "false"} style={{ "--step": i } as CSSProperties}>
            <span className="sw-stairs__label">Stage {i + 1}</span>
            <h3>{s.stage}</h3>
            <p>{s.text}</p>
            {s.quote ? <blockquote>“{s.quote}”</blockquote> : null}
          </li>
        ))}
      </ol>
      <p className="sw-culture__note">
        <span className="sw-culture__arrow" aria-hidden="true" />
        Our destination: interdependent. Based on the DuPont Bradley Curve.
      </p>
    </section>
  );
}

/* ---------- Habits ---------- */

const HABIT_ROWS: { icon: IconName; title: string; text: string }[] = [
  { icon: "clipboard", title: "Plan before I start", text: "I understand the task, the hazards and the controls before I begin." },
  { icon: "hand", title: "Stop when unsure", text: "If something doesn't look or feel right, I stop, ask, and continue only when it is safe." },
  { icon: "speak", title: "Speak up and report", text: "I report hazards, near misses and unsafe acts. Every report helps prevent the next incident." },
  { icon: "barrier", title: "No shortcuts", text: "I follow procedures, permits and PPE requirements every time, even when I'm under pressure." },
  { icon: "handshake", title: "Look out for others", text: "I watch out for my colleagues, and I welcome it when they watch out for me." },
];

export function Habits() {
  return (
    <section className="sw-habits" id="habits" aria-labelledby="habits-title">
      <div className="sw-habits__intro">
        <p className="sw-habits__kicker">Five habits</p>
        <h2 id="habits-title">How I work safely, every single day.</h2>
        <img src="/assets/brand/badge.png" alt="" width={1255} height={637} loading="lazy" />
      </div>
      <ol className="sw-habits__list">
        {HABIT_ROWS.map((h, i) => (
          <li key={h.title}>
            <span className="sw-habits__n">Habit 0{i + 1}</span>
            <Icon name={h.icon} />
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- Take 5 ---------- */

const TAKE5 = [
  { word: "Stop", text: "Pause before you start. Step back from the task, mentally and physically." },
  { word: "Look", text: "Walk the area. What has changed since last time? Who else is around?" },
  { word: "Assess", text: "What could go wrong? How badly could someone be hurt?" },
  { word: "Control", text: "Put the right controls in place. If you can't, ask for help." },
  { word: "Proceed", text: "Start only when it is safe, and keep watching as conditions change." },
];

export function TakeFive() {
  const [active, setActive] = useState(0);
  const step = TAKE5[active];
  return (
    <section className="sw-take5" id="take-5" aria-labelledby="take5-title">
      <SectionHead id="take5-title" index="03" title="Take 5 before every task" />
      <div className="sw-take5__tabs" role="tablist" aria-label="Take 5 steps">
        {TAKE5.map((s, i) => (
          <button
            key={s.word}
            type="button"
            role="tab"
            id={`take5-tab-${i}`}
            aria-selected={i === active}
            aria-controls="take5-panel"
            className="sw-take5__tab"
            onClick={() => setActive(i)}
          >
            <span>0{i + 1}</span>
            {s.word}
          </button>
        ))}
      </div>
      <div className="sw-take5__panel" role="tabpanel" id="take5-panel" aria-labelledby={`take5-tab-${active}`}>
        <p className="sw-take5__big" key={step.word}>
          {step.word}
        </p>
        <p className="sw-take5__text">{step.text}</p>
        <div className="sw-take5__meter" aria-hidden="true">
          {TAKE5.map((s, i) => (
            <span key={s.word} data-on={i <= active ? "true" : "false"} />
          ))}
        </div>
      </div>
      <p className="sw-take5__line">Five minutes of planning can prevent a lifetime of consequences.</p>
    </section>
  );
}

/* ---------- Near misses ---------- */

const PYRAMID = [
  { n: "1", label: "Major injury" },
  { n: "10", label: "Minor injuries" },
  { n: "30", label: "Property damage" },
  { n: "600", label: "Near misses" },
];

export function NearMiss() {
  return (
    <section className="sw-nearmiss" id="near-misses" aria-labelledby="nearmiss-title">
      <div className="sw-nearmiss__pyramid" aria-label="Frank Bird incident ratio">
        {PYRAMID.map((tier, i) => (
          <div key={tier.label} className="sw-nearmiss__tier" style={{ "--tier": i } as CSSProperties}>
            <strong>{tier.n}</strong>
            <span>{tier.label}</span>
          </div>
        ))}
      </div>
      <div className="sw-nearmiss__copy">
        <p className="sw-nearmiss__kicker">Near misses matter</p>
        <h2 id="nearmiss-title">Every near miss is a free lesson.</h2>
        <p>
          Frank Bird's study of around 1.75 million incident reports found that for every serious injury there were
          roughly 600 near misses. The exact ratio varies by industry, but the lesson holds: serious incidents rarely
          come without warning.
        </p>
        <p className="sw-nearmiss__call">Report it today. Prevent an injury tomorrow.</p>
      </div>
    </section>
  );
}

/* ---------- Stop work ---------- */

export function StopWork() {
  return (
    <section className="sw-stop" id="stop-work" aria-labelledby="stop-title">
      <div className="sw-stop__top">
        <Icon name="hand" className="sw-stop__hand" />
        <h2 id="stop-title">Everyone has the authority to stop work.</h2>
      </div>
      <div className="sw-stop__grid">
        <div className="sw-stop__list">
          <h3>When to stop</h3>
          <ul>
            <li>The task or the conditions have changed</li>
            <li>Controls or permits are missing</li>
            <li>You're unsure, or not trained for the task</li>
            <li>You see someone at risk</li>
          </ul>
        </div>
        <div className="sw-stop__list">
          <h3>How to stop</h3>
          <ol>
            <li>Stop the activity safely</li>
            <li>Make the area and the people safe</li>
            <li>Inform your supervisor or HSSQE</li>
            <li>Restart only when the issue is resolved</li>
          </ol>
        </div>
        <figure className="sw-stop__art">
          <img src="/assets/brand/team.png" alt="An engineer with a tablet and a site lead in a magenta hard hat" width={1579} height={724} loading="lazy" />
        </figure>
      </div>
      <p className="sw-stop__promise">No blame for stopping unsafe work. Ever.</p>
    </section>
  );
}

/* ---------- Pledge wall ---------- */

function formatDate(value: string) {
  const d = new Date(value.replace(" ", "T") + "Z");
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "Asia/Riyadh" });
}

export function PledgeWallSection({ wall }: { wall: PledgeWall }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setStatus("saving");
    try {
      const result = await addPledge({
        data: {
          name: String(fd.get("name") ?? ""),
          team: String(fd.get("team") ?? "") || undefined,
          reason: String(fd.get("reason") ?? ""),
          habit: String(fd.get("habit") ?? HABITS[0]) as (typeof HABITS)[number],
        },
      });
      if (result.ok) {
        form.reset();
        setStatus("done");
        setMessage("Thank you. Your pledge is on the wall.");
        await router.invalidate();
      } else {
        setStatus("error");
        setMessage(result.error);
      }
    } catch {
      setStatus("error");
      setMessage("Please check your details: name, a reason of at least a few words, and one habit.");
    }
  }

  return (
    <section className="sw-pledge" id="pledge" aria-labelledby="pledge-title">
      <div className="sw-pledge__intro">
        <p className="sw-pledge__kicker">Activity · My Safety Pledge</p>
        <h2 id="pledge-title">
          I work safely because<span aria-hidden="true">…</span>
        </h2>
        <ol className="sw-pledge__steps">
          <li>
            <strong>Write your why.</strong> Finish the sentence: "I work safely because…"
          </li>
          <li>
            <strong>Sign your pledge.</strong> Add one safe habit you will practise every day, then sign your name.
          </li>
          <li>
            <strong>Share it.</strong> Take a photo with the board and share it with your team.
          </li>
        </ol>
        <p className="sw-pledge__count">
          <span>{wall.count}</span> {wall.count === 1 ? "pledge" : "pledges"} signed so far
        </p>
      </div>

      <form className="sw-pledge__form" onSubmit={onSubmit}>
        <label>
          <span>I work safely because…</span>
          <textarea name="reason" required minLength={3} maxLength={180} rows={3} placeholder="my daughter is waiting for me at the door" />
        </label>
        <fieldset>
          <legend>The habit I will practise every day</legend>
          <div className="sw-pledge__habits">
            {HABITS.map((h, i) => (
              <label key={h}>
                <input type="radio" name="habit" value={h} defaultChecked={i === 0} />
                <span>{h}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="sw-pledge__row">
          <label>
            <span>Your name</span>
            <input name="name" required minLength={2} maxLength={60} autoComplete="name" />
          </label>
          <label>
            <span>Team (optional)</span>
            <input name="team" maxLength={60} placeholder="e.g. Rolling Stock, Line 3" />
          </label>
        </div>
        <button className="sw-pledge__submit" type="submit" disabled={status === "saving" || !wall.online}>
          <span>{status === "saving" ? "Signing…" : "Sign my pledge"}</span>
        </button>
        <p className="sw-pledge__status" role="status" data-state={status}>
          {!wall.online ? "The pledge wall opens shortly." : message}
        </p>
      </form>

      <ul className="sw-pledge__wall" aria-label="Signed pledges">
        {wall.pledges.length === 0 ? (
          <li className="sw-pledge__card sw-pledge__card--empty">
            <p>Be the first name on the wall.</p>
          </li>
        ) : (
          wall.pledges.map((p) => (
            <li key={p.id} className="sw-pledge__card">
              <p className="sw-pledge__why">“I work safely because {p.reason}”</p>
              <p className="sw-pledge__habit">{p.habit}</p>
              <p className="sw-pledge__sign">
                {p.name}
                {p.team ? <span> · {p.team}</span> : null}
                <time>{formatDate(p.created_at)}</time>
              </p>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

/* ---------- Ask yourself ---------- */

const ASK: { icon: IconName; title: string; q: string }[] = [
  { icon: "person", title: "Your role", q: "What does working safely look like in my day-to-day job?" },
  { icon: "stopwatch", title: "Pressure points", q: "When am I most tempted to take a shortcut, and what helps me resist it?" },
  { icon: "megaphone", title: "Speaking up", q: "Do I raise safety concerns when I see them? If not, what stops me?" },
  { icon: "bulb", title: "One change", q: "What is one thing I can do differently this week to work more safely?" },
];

export function AskYourself() {
  return (
    <section className="sw-ask" id="reflect" aria-labelledby="ask-title">
      <SectionHead id="ask-title" index="04" title="Ask yourself" lead="Four honest questions. Take one into your next toolbox talk." />
      <ul className="sw-ask__grid">
        {ASK.map((a) => (
          <li key={a.title}>
            <Icon name={a.icon} />
            <h3>{a.title}</h3>
            <p>{a.q}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Week ---------- */

const WEEK: { day: number; date: string; short: string; title: string; sub: string; href?: string }[] = [
  { day: 1, date: "2026-10-04", short: "Sun 4 Oct", title: "How I Work Safely", sub: "Campaign launch", href: "/" },
  { day: 2, date: "2026-10-05", short: "Mon 5 Oct", title: "Safety on the Riyadh Metro Network", sub: "Safe Metro Travel Awareness" },
  { day: 3, date: "2026-10-06", short: "Tue 6 Oct", title: "Situational Awareness & Personal Safety", sub: "Stay Alert, Stay Safe", href: "/day-3" },
  { day: 4, date: "2026-10-07", short: "Wed 7 Oct", title: "Health, Wellbeing & Mental Safety", sub: "Looking After Yourself to Work Safely" },
  { day: 5, date: "2026-10-08", short: "Thu 8 Oct", title: "Safety Leadership & Recognition", sub: "Closing ceremony & team lunch" },
];

export function Week() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Riyadh" }));
  }, []);

  return (
    <section className="sw-week" id="week" aria-labelledby="week-title">
      <SectionHead id="week-title" index="05" title="Five days. One theme." lead="Why I Work Safely, 4 to 8 October 2026." />
      <ol className="sw-week__line">
        {WEEK.map((d) => {
          const state = today == null ? "upcoming" : d.date < today ? "done" : d.date === today ? "today" : "upcoming";
          return (
            <li key={d.day} data-state={state}>
              <span className="sw-week__dot" aria-hidden="true" />
              <p className="sw-week__day">
                Day 0{d.day}
                {state === "today" ? <em>Today</em> : null}
              </p>
              <h3>{d.title}</h3>
              <p className="sw-week__sub">{d.sub}</p>
              <time dateTime={d.date}>{d.short}</time>
              {d.href ? (
                <a className="sw-week__open" href={d.href}>
                  Open Day 0{d.day} <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

/* ---------- Key message + footer ---------- */

export function KeyMessage() {
  return (
    <section className="sw-key" aria-labelledby="key-title">
      <img src="/assets/brand/team.png" alt="" width={1579} height={724} loading="lazy" className="sw-key__art" />
      <div className="sw-key__copy">
        <p>Key message</p>
        <h2 id="key-title">
          Safety is a choice I make <span>every day.</span>
        </h2>
        <p className="sw-key__sub">For the people waiting for me at home.</p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="sw-footer">
      <div className="sw-footer__brand">
        <img src="/assets/brand/logo-white.png" alt="AtkinsRéalis" width={694} height={99} loading="lazy" />
        <img className="sw-footer__trains" src="/assets/brand/trains.png" alt="The six Riyadh Metro line trains" width={578} height={113} loading="lazy" />
        <p>
          Program Management Service (PMS)
          <br />
          For the O&amp;M of Riyadh Metro
        </p>
      </div>
      <div className="sw-footer__meta">
        <p>HSSQE Department</p>
        <p>Safety Week 2026 · 4 to 8 October</p>
        <p className="sw-footer__small">AtkinsRéalis, Baseline / Référence. Internal safety campaign.</p>
      </div>
    </footer>
  );
}
