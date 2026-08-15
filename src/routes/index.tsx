import { createFileRoute } from "@tanstack/react-router";
import { Stopwatch } from "@/components/stopwatch/Stopwatch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stopwatch — Precision Timer with Lap Tracking" },
      {
        name: "description",
        content:
          "A fast, accurate online stopwatch with start, pause, resume, reset, lap recording and lap statistics.",
      },
      { property: "og:title", content: "Stopwatch — Precision Timer with Lap Tracking" },
      {
        property: "og:description",
        content: "Start, pause, resume and record laps with a precise millisecond stopwatch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Stopwatch />;
}
