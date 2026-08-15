import { Pause, Play, RotateCcw, Timer } from "lucide-react";
import type { StopwatchStatus } from "@/lib/stopwatch";

interface ControlButtonsProps {
  status: StopwatchStatus;
  canReset: boolean;
  onToggle: () => void;
  onLap: () => void;
  onReset: () => void;
}

export function ControlButtons({
  status,
  canReset,
  onToggle,
  onLap,
  onReset,
}: ControlButtonsProps) {
  const running = status === "running";
  const primaryLabel = running ? "Pause" : status === "paused" ? "Resume" : "Start";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={onToggle}
        aria-label={`${primaryLabel} stopwatch`}
        className="btn-base btn-primary min-w-[9.5rem] px-7 py-3 text-base"
      >
        {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        {primaryLabel}
      </button>

      <button
        type="button"
        onClick={onLap}
        disabled={status === "ready"}
        aria-label="Record lap"
        className="btn-base btn-ghost px-6 py-3 text-base"
      >
        <Timer className="h-5 w-5" />
        Lap
      </button>

      <button
        type="button"
        onClick={onReset}
        disabled={!canReset}
        aria-label="Reset stopwatch"
        className="btn-base btn-ghost px-6 py-3 text-base"
      >
        <RotateCcw className="h-5 w-5" />
        Reset
      </button>
    </div>
  );
}
