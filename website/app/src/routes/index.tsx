import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import {
  AskYourself,
  ChapterActions,
  Culture,
  Day3Teaser,
  Habits,
  KeyMessage,
  NearMiss,
  PledgeWallSection,
  SiteFooter,
  SiteHeader,
  StopWork,
  TakeFive,
  Week,
  Welcome,
  Why,
} from "@/components/site/sections";
import { listPledges } from "@/lib/api/pledges.functions";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  // Title/description/og come from app-meta.json via the root route; this
  // head only adds the brand typefaces.
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  loader: () => listPledges(),
  component: Index,
});

// Module constant: the final chapter carries the journey's CTAs. Built once so
// the scroll controller is never rebuilt by a re-render.
const journeyScenes = scrollScrubScenes.map((scene, i) =>
  i === scrollScrubScenes.length - 1 ? { ...scene, actions: <ChapterActions /> } : scene,
);

function Index() {
  const wall = Route.useLoaderData();
  return (
    <div className="sw-site" id="top">
      <SiteHeader />
      <main>
        <ScrollScrub className="sw-journey" scenes={journeyScenes} theme={scrollScrubTheme} />
        <Day3Teaser />
        <Welcome />
        <Why />
        <Culture />
        <Habits />
        <TakeFive />
        <NearMiss />
        <StopWork />
        <PledgeWallSection wall={wall} />
        <AskYourself />
        <Week />
        <KeyMessage />
      </main>
      <SiteFooter />
    </div>
  );
}
