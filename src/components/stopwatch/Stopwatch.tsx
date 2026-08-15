import { useEffect } from "react";
import { useStopwatch } from "@/hooks/useStopwatch";
import { ControlButtons } from "./ControlButtons";
import { LapHistory } from "./LapHistory";
import { StatusIndicator } from "./StatusIndicator";
import { TimerDisplay } from "./TimerDisplay";

function isTypingTarget(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

export function Stopwatch() {
  const { elapsed, status, laps, toggle, reset, recordLap, clearLaps } = useStopwatch();
  const canReset = elapsed > 0 || laps.length > 0;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || isTypingTarget(event.target)) return;
      const key = event.key.toLowerCase();
      if (event.code === "Space" || key === " ") {
        event.preventDefault();
        toggle();
      } else if (key === "l") {
        if (status !== "ready") recordLap();
      } else if (key === "r") {
        if (canReset) reset();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggle, recordLap, reset, status, canReset]);

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10 sm:py-16">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-[0.3em] uppercase sm:text-4xl">Stopwatch</h1>
        <p className="text-muted-foreground mt-3 text-sm sm:text-base">
          Track your time. Record every lap.
        </p>
      </header>

      <section className="glass-card animate-rise rounded-3xl px-5 py-9 text-center sm:px-10 sm:py-12">
        <p className="text-muted-foreground mb-6 text-[0.7rem] tracking-[0.35em] uppercase">
          Elapsed
        </p>
        <TimerDisplay elapsed={elapsed} />
        <div className="mt-6 flex justify-center">
          <StatusIndicator status={status} />
        </div>
        <div className="mt-8">
          <ControlButtons
            status={status}
            canReset={canReset}
            onToggle={toggle}
            onLap={recordLap}
            onReset={reset}
          />
        </div>
        <p className="text-muted-foreground mt-6 text-xs">
          Shortcuts: Space start/pause · L lap · R reset
        </p>
      </section>

      <LapHistory laps={laps} onClear={clearLaps} />
    </main>
  );
}
