import { formatLapTime, type Lap } from "@/lib/stopwatch";

interface LapRowProps {
  lap: Lap;
  isLatest: boolean;
  isBest: boolean;
}

export function LapRow({ lap, isLatest, isBest }: LapRowProps) {
  return (
    <li
      className={`animate-rise grid grid-cols-[auto_1fr_1fr] items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
        isLatest ? "border-primary/40 bg-primary/10" : "border-border bg-muted/25"
      }`}
    >
      <span className="text-muted-foreground w-16 font-medium">
        Lap {String(lap.index).padStart(2, "0")}
      </span>
      <span className="text-right font-mono tabular-nums sm:text-left">
        {formatLapTime(lap.duration)}
        {isBest && (
          <span className="text-success ml-2 text-[0.65rem] tracking-wide uppercase">best</span>
        )}
      </span>
      <span className="text-muted-foreground text-right font-mono tabular-nums">
        {formatLapTime(lap.total)}
      </span>
    </li>
  );
}
