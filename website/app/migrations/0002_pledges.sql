-- Safety Pledge wall entries (additive).
CREATE TABLE IF NOT EXISTS pledges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT,
  reason TEXT NOT NULL,
  habit TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
