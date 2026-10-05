# Why I Work Safely: Safety Week 2026 website

The campaign website for AtkinsRéalis Safety Week 2026 (PMS for the O&M of Riyadh Metro, HSSQE Department, 4 to 8 October 2026). It was built and is hosted on Higgsfield (site slug `why-i-work-safely`).

The site's master copy lives in the Higgsfield website repo. This folder is a snapshot of the files written for the build: the page code, the brand assets taken from the Day 1 deck, and the encoded film.

## What's on the page

1. **Scroll journey.** A 15 second cinematic film (Kling 3.0, generated on Higgsfield) that plays as you scroll. It starts on a magenta hard hat resting on a Riyadh Metro platform railing and rises until the metro line becomes a glowing ribbon over the homes. The film is cut into three chapters at exact frames, so there are no visible seams:
   - "Someone is waiting for you to come home today."
   - "A promise, not a rule."
   - "Safety is a choice I make every day."
2. **Welcome.** Today's theme and today's goal.
3. **Why I work safely.** My family, my colleagues, myself.
4. **From compliance to commitment.** The four Bradley Curve stages drawn as a staircase.
5. **Five habits.**
6. **Take 5.** The five steps as an interactive selector.
7. **Near misses matter.** The 1 / 10 / 30 / 600 pyramid.
8. **Stop work authority.**
9. **Safety Pledge wall.** A live form that stores pledges in a Cloudflare D1 database.
10. **Ask yourself.** Four reflection questions.
11. **The week.** The five-day programme, with today highlighted automatically in Riyadh time.
12. **Key message and footer.** AtkinsRéalis logo and the six Riyadh Metro line trains.

## Day 3 page (`/day-3`)

Situational Awareness & Personal Safety, Tuesday 6 October: "Stay Alert, Stay Safe". The content comes from the Day 3 deck video:

- What situational awareness is, why it matters, and how it applies inside and outside work.
- The awareness cycle (Perceive, Understand, Anticipate, Act) as an interactive wheel.
- Levels of alertness (White, Yellow, Orange, Red) as an interactive selector. Aim for Yellow.
- What weakens awareness: six factors.
- Staying informed in uncertain times.
- Emergency numbers 911, 997, 998 and 999, each tap-to-call on phones.
- Personal safety on the move.
- Look after each other: Notice. Ask. Support.
- The Awareness Challenge, a three-question self-check with a score.
- Key message, and a "coming up" card for Day 4.

The home page links to Day 3 from the nav, a teaser band under the film, and the week timeline.

## Layout

| Path | Contents |
|---|---|
| `app/src/routes/index.tsx` | Page composition and the pledge loader |
| `app/src/routes/day-3.tsx` + `app/src/components/site/day3.*` | Day 3 page |
| `app/src/components/site/` | Section components and stylesheet |
| `app/src/scroll-scrub-scenes.ts` | Film chapters and theme |
| `app/src/lib/api/pledges.functions.ts` | Pledge wall server functions |
| `app/migrations/0002_pledges.sql` | D1 schema for pledges |
| `app/public/assets/` | Brand assets, icons and encoded film clips with their posters |
| `app/design-brief.md` | Design brief |
| `refs/storyboard.png` | Film storyboard |
| `cover/cover.png` | Launch cover |
