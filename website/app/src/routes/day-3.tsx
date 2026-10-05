import { createFileRoute } from "@tanstack/react-router";

import {
  Basics,
  Challenge,
  Cycle,
  Day3Hero,
  Day3Key,
  Informed,
  Levels,
  LookAfter,
  Numbers,
  OnTheMove,
  Weaken,
} from "@/components/site/day3";
import { SiteFooter, SiteHeader, Week } from "@/components/site/sections";

const TITLE = "Day 3: Situational Awareness & Personal Safety | Why I Work Safely";
const DESCRIPTION =
  "Safety Week 2026, Day 3, Tuesday 6 October: Stay Alert, Stay Safe. The awareness cycle, levels of alertness, emergency numbers and the Awareness Challenge.";

export const Route = createFileRoute("/day-3")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Day3,
});

function Day3() {
  return (
    <div className="sw-site" id="top">
      <SiteHeader />
      <main>
        <Day3Hero />
        <Basics />
        <Cycle />
        <Levels />
        <Weaken />
        <Informed />
        <Numbers />
        <OnTheMove />
        <LookAfter />
        <Challenge />
        <Day3Key />
        <Week />
      </main>
      <SiteFooter />
    </div>
  );
}
