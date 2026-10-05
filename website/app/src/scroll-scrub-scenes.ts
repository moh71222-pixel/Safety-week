/**
 * Scene data for the scroll-scrub journey.
 *
 * One continuous 15s take, cut at frame-exact points into three consecutive
 * clips. Each poster is the first frame of its own encoded clip, so every
 * seam is pixel identical.
 *
 * Keep this array a module constant. Changing its identity on every render
 * intentionally rebuilds the media controller.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#C8FF00",
  background: "#0E1B23",
  ink: "#FFFFFF",
  muted: "#B7D0E3",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "Safety Week 2026 runs from Sunday 4 to Thursday 8 October. Five days, one shared theme, and one simple reason to get it right.",
    clip: "/assets/world/scene-01.mp4",
    id: "home",
    kicker: "AtkinsRéalis Safety Week 2026",
    label: "Waiting",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    scroll: 1.6,
    tags: ["4 to 8 October", "Riyadh Metro O&M", "HSSQE"],
    title: "Someone is waiting for you to come home today.",
  },
  {
    body: "Safety is not a rule we follow for the company. It is a promise we keep to the people who matter most.",
    clip: "/assets/world/scene-02.mp4",
    id: "promise",
    kicker: "Why I work safely",
    label: "Promise",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    mobilePoster: "/assets/world/scene-02-mobile-poster.png",
    poster: "/assets/world/scene-02-poster.png",
    scroll: 1.6,
    tags: ["My family", "My colleagues", "Myself"],
    title: "A promise, not a rule.",
  },
  {
    align: "right",
    body: "For the people waiting for me at home. Know your why, practise five safe habits every day, and make your pledge.",
    clip: "/assets/world/scene-03.mp4",
    id: "choice",
    kicker: "Key message",
    label: "Choice",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    mobilePoster: "/assets/world/scene-03-mobile-poster.png",
    poster: "/assets/world/scene-03-poster.png",
    scroll: 1.8,
    title: "Safety is a choice I make every day.",
  },
];
