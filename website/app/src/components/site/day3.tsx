import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BedSingle,
  Binoculars,
  Brain,
  Car,
  Check,
  CloudLightning,
  DoorOpen,
  Eye,
  FireExtinguisher,
  Footprints,
  Hand,
  HandHeart,
  Headphones,
  Luggage,
  MapPinned,
  MessagesSquare,
  Newspaper,
  Phone,
  Repeat,
  ShieldCheck,
  Smartphone,
  Timer,
  TriangleAlert,
  UserRoundCheck,
  Users,
} from "lucide-react";

import "./site.css";
import "./day3.css";

function Badge({ icon: I, size = "md" }: { icon: LucideIcon; size?: "md" | "lg" }) {
  return (
    <span className="d3-badge" data-size={size} aria-hidden="true">
      <I strokeWidth={2.2} />
    </span>
  );
}

/* ---------- Hero ---------- */

export function Day3Hero() {
  return (
    <section className="d3-hero" aria-labelledby="d3-title">
      <img className="d3-hero__bg" src="/assets/day3/hero.jpg" alt="" width={1536} height={864} />
      <div className="d3-hero__copy">
        <p className="d3-hero__pill">Safety Week 2026 · Day 3 · Tuesday 6 October 2026</p>
        <h1 id="d3-title">
          Situational Awareness <span>&amp; Personal Safety</span>
        </h1>
        <p className="d3-hero__tag">Stay Alert, Stay Safe</p>
        <a className="d3-hero__jump" href="#challenge">
          Take the Awareness Challenge <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="d3-hero__day" aria-hidden="true">
        <span>Day</span>
        <strong>03</strong>
      </div>
    </section>
  );
}

/* ---------- What it is ---------- */

const BASICS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Binoculars,
    title: "What is it?",
    text: "Situational awareness means knowing what is happening around you, understanding it, and anticipating what could happen next.",
  },
  {
    icon: TriangleAlert,
    title: "Why it matters",
    text: "Many incidents give warning signs first. Awareness gives us the time to notice them and act before anyone is harmed.",
  },
  {
    icon: MapPinned,
    title: "Inside & outside work",
    text: "Awareness keeps us safe at our desks, on site, on the road, in public places and at home.",
  },
];

export function Basics() {
  return (
    <section className="d3-basics" aria-labelledby="d3-basics-title">
      <div className="d3-basics__head">
        <h2 id="d3-basics-title">Situational awareness</h2>
        <img src="/assets/day3/travellers.png" alt="A site worker and a traveller with a camera, both alert to their surroundings" width={740} height={370} />
      </div>
      <ul className="d3-basics__grid">
        {BASICS.map((b) => (
          <li key={b.title}>
            <Badge icon={b.icon} size="lg" />
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Awareness cycle ---------- */

const CYCLE: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Eye, title: "Perceive", text: "Notice what is around you: people, activity, sounds, changes, and anything out of place." },
  { icon: Brain, title: "Understand", text: "Ask what it means. Is this normal? Could it affect me or the people around me?" },
  { icon: Binoculars, title: "Anticipate", text: "Think ahead. What could happen next if nothing changes?" },
  { icon: Hand, title: "Act", text: "Make a safe decision: stop, move away, report it or ask for help." },
];

export function Cycle() {
  const [active, setActive] = useState(0);
  return (
    <section className="d3-cycle" id="cycle" aria-labelledby="d3-cycle-title">
      <div className="d3-cycle__intro">
        <p className="d3-kicker">Four steps, a few seconds</p>
        <h2 id="d3-cycle-title">The awareness cycle</h2>
        <p className="d3-cycle__line">It takes seconds, and it prevents injuries.</p>
      </div>
      <div className="d3-cycle__wheel">
        <ol className="d3-cycle__ring">
          {CYCLE.map((c, i) => (
            <li key={c.title} data-pos={i}>
              <button
                type="button"
                aria-pressed={active === i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <c.icon aria-hidden="true" strokeWidth={2.2} />
                <span>Step 0{i + 1}</span>
                {c.title}
              </button>
            </li>
          ))}
        </ol>
        <div className="d3-cycle__core" aria-live="polite">
          <p className="d3-cycle__step">Step 0{active + 1}</p>
          <h3>{CYCLE[active].title}</h3>
          <p>{CYCLE[active].text}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Levels of alertness ---------- */

const LEVELS = [
  { key: "white", name: "White", label: "Switched off", text: "Unaware and distracted: head down in a phone or lost in thought. Hazards go unnoticed." },
  { key: "yellow", name: "Yellow", label: "Relaxed alert", text: "Calm, but aware of your surroundings. The level to aim for, at work and in public." },
  { key: "orange", name: "Orange", label: "Focused alert", text: "Something has caught your attention. You're assessing it and planning your response." },
  { key: "red", name: "Red", label: "Take action", text: "The hazard or threat is real. You act: stop, move away, raise the alarm." },
];

export function Levels() {
  const [level, setLevel] = useState(1);
  const current = LEVELS[level];
  return (
    <section className="d3-levels" id="levels" aria-labelledby="d3-levels-title" data-level={current.key}>
      <div className="d3-levels__top">
        <h2 id="d3-levels-title">Levels of alertness</h2>
        <p className="d3-levels__aim">
          Aim for <strong>Yellow</strong>: relaxed, but aware.
        </p>
      </div>
      <div className="d3-levels__dial" role="radiogroup" aria-label="Choose a level of alertness">
        {LEVELS.map((l, i) => (
          <button
            key={l.key}
            type="button"
            role="radio"
            aria-checked={i === level}
            className="d3-levels__chip"
            data-key={l.key}
            onClick={() => setLevel(i)}
          >
            <span>{l.name}</span>
            {l.key === "yellow" ? <em>Aim here</em> : null}
          </button>
        ))}
      </div>
      <div className="d3-levels__panel" aria-live="polite">
        <p className="d3-levels__name">{current.name}</p>
        <h3>{current.label}</h3>
        <p>{current.text}</p>
      </div>
    </section>
  );
}

/* ---------- What weakens awareness ---------- */

const WEAKEN: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Smartphone, title: "Distraction", text: "Phones, conversations and multitasking pull attention away from what is happening around us." },
  { icon: BedSingle, title: "Fatigue", text: "Poor sleep and long hours slow our reactions and weaken our judgment." },
  { icon: Repeat, title: "Complacency", text: "Familiar tasks and places make us stop noticing. “It's always been fine” is a warning sign." },
  { icon: Timer, title: "Rushing", text: "Time pressure makes us skip checks and miss hazards we would normally see." },
  { icon: CloudLightning, title: "Stress & worry", text: "When our mind is elsewhere, so is our attention. It's OK to say you're not OK." },
  { icon: Headphones, title: "Blocked senses", text: "Headphones, hoods and screens can stop us seeing or hearing warnings." },
];

export function Weaken() {
  return (
    <section className="d3-weaken" aria-labelledby="d3-weaken-title">
      <h2 id="d3-weaken-title">What weakens our awareness</h2>
      <ul>
        {WEAKEN.map((w) => (
          <li key={w.title}>
            <Badge icon={w.icon} />
            <h3>{w.title}</h3>
            <p>{w.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Stay informed ---------- */

export function Informed() {
  return (
    <section className="d3-informed" aria-labelledby="d3-informed-title">
      <div className="d3-informed__head">
        <h2 id="d3-informed-title">Stay informed in uncertain times</h2>
        <p>Calm, informed and prepared: together.</p>
      </div>
      <div className="d3-informed__cols">
        <div className="d3-informed__card" data-tone="solid">
          <Badge icon={ShieldCheck} size="lg" />
          <h3>Follow official guidance</h3>
          <ul>
            <li>Rely on official government channels and company advisories</li>
            <li>Follow instructions from authorities and site management</li>
            <li>Check travel advice before business trips</li>
            <li>Know your site's emergency procedures</li>
          </ul>
        </div>
        <div className="d3-informed__card" data-tone="outline">
          <Badge icon={Newspaper} size="lg" />
          <h3>Stop rumours spreading</h3>
          <ul>
            <li>Don't share unverified news, videos or messages</li>
            <li>Check the source before you forward anything</li>
            <li>Avoid speculation in work chats and groups</li>
            <li>If in doubt, ask HSSQE or your line manager</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Emergency numbers ---------- */

const NUMBERS = [
  { n: "911", title: "Unified Emergency", sub: "Police, ambulance and civil defence" },
  { n: "997", title: "Ambulance", sub: "Saudi Red Crescent" },
  { n: "998", title: "Civil Defence", sub: "Fire and rescue" },
  { n: "999", title: "Police", sub: "Public security" },
];

export function Numbers() {
  return (
    <section className="d3-numbers" id="numbers" aria-labelledby="d3-numbers-title">
      <p className="d3-kicker">Be emergency ready</p>
      <h2 id="d3-numbers-title">Know your numbers</h2>
      <ul className="d3-numbers__grid">
        {NUMBERS.map((x) => (
          <li key={x.n}>
            <a href={`tel:${x.n}`} aria-label={`Call ${x.n}, ${x.title}`}>
              <strong>{x.n}</strong>
              <span className="d3-numbers__title">{x.title}</span>
              <span className="d3-numbers__sub">{x.sub}</span>
              <span className="d3-numbers__call">
                <Phone size={14} aria-hidden="true" /> Tap to call
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="d3-numbers__note">
        Save these numbers, add an ICE (In Case of Emergency) contact to your phone, and keep your line manager and
        site security numbers to hand.
      </p>
    </section>
  );
}

/* ---------- On the move ---------- */

const MOVE: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Car, title: "On the road", text: "Seatbelt on, phone away, respect speed limits, and allow extra time so you're never rushing." },
  { icon: Footprints, title: "On foot", text: "Use crossings, stay visible at night, and keep your eyes up, not on your screen." },
  { icon: Luggage, title: "Travelling for work", text: "Share your itinerary, check in when you arrive, and follow journey management procedures." },
  { icon: UserRoundCheck, title: "Belongings & information", text: "Keep valuables out of sight, lock your screen, and think before posting your location online." },
];

export function OnTheMove() {
  return (
    <section className="d3-move" aria-labelledby="d3-move-title">
      <h2 id="d3-move-title">Personal safety on the move</h2>
      <ul>
        {MOVE.map((m, i) => (
          <li key={m.title}>
            <span className="d3-move__n">0{i + 1}</span>
            <Badge icon={m.icon} />
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Look after each other ---------- */

const NAS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Eye, title: "Notice", text: "Changes in mood, energy, focus or behaviour in the people around you." },
  { icon: MessagesSquare, title: "Ask", text: "A simple “Are you OK?” can open the door. Listen without judging." },
  { icon: HandHeart, title: "Support", text: "Help them find support: a line manager, HSSQE or professional help." },
];

export function LookAfter() {
  return (
    <section className="d3-look" aria-labelledby="d3-look-title">
      <div className="d3-look__capsule">
        <h2 id="d3-look-title">
          Notice. Ask. <span>Support.</span>
        </h2>
        <p>Situational awareness includes the people around us. A change in a colleague can be a sign they need help.</p>
      </div>
      <ol className="d3-look__list">
        {NAS.map((s) => (
          <li key={s.title}>
            <Badge icon={s.icon} />
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- Awareness challenge ---------- */

const CHALLENGE: { icon: LucideIcon; title: string; q: string }[] = [
  { icon: DoorOpen, title: "Exits", q: "Without looking around, can you point to the two nearest emergency exits?" },
  { icon: FireExtinguisher, title: "Equipment", q: "Do you know where the nearest fire extinguisher, alarm call point and first aid kit are?" },
  { icon: Users, title: "People & places", q: "Do you know your first aiders, fire wardens and assembly point?" },
];

type Answer = "yes" | "no" | null;

export function Challenge() {
  const [answers, setAnswers] = useState<Answer[]>([null, null, null]);
  const answered = answers.filter((a) => a !== null).length;
  const score = answers.filter((a) => a === "yes").length;

  function set(i: number, value: Answer) {
    setAnswers((prev) => prev.map((a, j) => (j === i ? value : a)));
  }

  let verdict = "Answer honestly. Nobody sees your score but you.";
  if (answered === 3) {
    verdict =
      score === 3
        ? "Fully aware. Now test a colleague."
        : score === 0
          ? "Time to look around. Walk your area today and find all three."
          : `${score} of 3. Walk your area today and close the gap.`;
  }

  return (
    <section className="d3-challenge" id="challenge" aria-labelledby="d3-challenge-title">
      <div className="d3-challenge__head">
        <p className="d3-kicker">Activity</p>
        <h2 id="d3-challenge-title">The Awareness Challenge</h2>
      </div>
      <ol className="d3-challenge__grid">
        {CHALLENGE.map((c, i) => (
          <li key={c.title} data-answer={answers[i] ?? "none"}>
            <span className="d3-challenge__num">{i + 1}</span>
            <c.icon className="d3-challenge__icon" aria-hidden="true" strokeWidth={2} />
            <h3>{c.title}</h3>
            <p>{c.q}</p>
            <div className="d3-challenge__answers" role="group" aria-label={`${c.title}: your answer`}>
              <button type="button" aria-pressed={answers[i] === "yes"} onClick={() => set(i, "yes")}>
                <Check size={16} aria-hidden="true" /> Yes, I know
              </button>
              <button type="button" aria-pressed={answers[i] === "no"} onClick={() => set(i, "no")}>
                Not sure
              </button>
            </div>
          </li>
        ))}
      </ol>
      <div className="d3-challenge__result" aria-live="polite" data-done={answered === 3 ? "true" : "false"}>
        <div className="d3-challenge__meter" aria-hidden="true">
          {answers.map((a, i) => (
            <span key={i} data-state={a ?? "none"} />
          ))}
        </div>
        <p>{verdict}</p>
      </div>
    </section>
  );
}

/* ---------- Key message ---------- */

export function Day3Key() {
  return (
    <section className="d3-key" aria-labelledby="d3-key-title">
      <div className="d3-key__copy">
        <p className="d3-key__pill">Key message</p>
        <h2 id="d3-key-title">Stay alert, stay informed and stay ready.</h2>
        <p className="d3-key__sub">At work and beyond.</p>
        <div className="d3-key__next">
          <span>Coming up tomorrow</span>
          <strong>Day 4: Health, Wellbeing &amp; Mental Safety</strong>
          <em>Looking After Yourself to Work Safely · Wed 7 Oct</em>
        </div>
      </div>
      <figure className="d3-key__art">
        <img className="d3-key__badge" src="/assets/brand/badge.png" alt="Why I Work Safely" width={1255} height={637} loading="lazy" />
        <img src="/assets/day3/family.png" alt="A site worker with two children, safe at the end of the day" width={740} height={360} loading="lazy" />
      </figure>
    </section>
  );
}
