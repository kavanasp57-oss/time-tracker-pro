import { formatLapTime, lapStats, type Lap } from "@/lib/stopwatch";
import { LapRow } from "./LapRow";

interface LapHistoryProps {
  laps: Lap[];
  onClear: () => void;
}

export function LapHistory({ laps, onClear }: LapHistoryProps) {
  const stats = lapStats(laps);
  const bestDuration = stats?.best;

  return (
    <section className="glass-card animate-rise mt-6 rounded-3xl p-5 sm:p-7" aria-label="Lap history">
      <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Lap History</h2>
        <button
          type="button"
          onClick={onClear}
          disabled={laps.length === 0}
          className="btn-base btn-ghost px-4 py-2 text-sm"
        >
          Clear Laps
        </button>
      </header>

      {stats && (
        <dl className="mb-5 grid grid-cols-3 gap-3">
          {[
            { label: "Total Laps", value: String(stats.count) },
            { label: "Best Lap", value: formatLapTime(stats.best) },
            { label: "Average Lap", value: formatLapTime(stats.average) },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-muted/25 p-3">
              <dt className="text-muted-foreground text-[0.65rem] tracking-[0.12em] uppercase">
                {item.label}
              </dt>
              <dd className="mt-1 font-mono text-sm tabular-nums sm:text-base">{item.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {laps.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border px-4 py-10 text-center">
          <p className="font-medium">No laps recorded yet</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Start the stopwatch and record your first lap.
          </p>
        </div>
      ) : (
        <>
          <div className="text-muted-foreground grid grid-cols-[auto_1fr_1fr] gap-3 px-4 pb-2 text-[0.65rem] tracking-[0.14em] uppercase">
            <span className="w-16">Lap</span>
            <span className="text-right sm:text-left">Lap Time</span>
            <span className="text-right">Total Time</span>
          </div>
          <ul className="flex max-h-80 flex-col-reverse gap-2 overflow-y-auto pr-1">
            {laps.map((lap, i) => (
              <LapRow
                key={lap.id}
                lap={lap}
                isLatest={i === laps.length - 1}
                isBest={laps.length > 1 && lap.duration === bestDuration}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
