import type { StopwatchStatus } from "@/lib/stopwatch";

const LABELS: Record<StopwatchStatus, string> = {
  ready: "Ready",
  running: "Running",
  paused: "Paused",
};

const DOT: Record<StopwatchStatus, string> = {
  ready: "bg-muted-foreground",
  running: "bg-success animate-pulse-dot",
  paused: "bg-warning",
};

export function StatusIndicator({ status }: { status: StopwatchStatus }) {
  return (
    <div
      className="text-muted-foreground inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase"
      role="status"
      aria-live="polite"
    >
      <span className={`h-2 w-2 rounded-full ${DOT[status]}`} aria-hidden="true" />
      {LABELS[status]}
    </div>
  );
}
