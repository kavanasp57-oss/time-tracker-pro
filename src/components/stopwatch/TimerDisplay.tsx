import { splitTime } from "@/lib/stopwatch";

interface TimerDisplayProps {
  elapsed: number;
}

export function TimerDisplay({ elapsed }: TimerDisplayProps) {
  const { hours, minutes, seconds, centis } = splitTime(elapsed);
  const segment = "tabular-nums";
  const colon = <span className="text-muted-foreground/60">:</span>;

  return (
    <div
      className="font-mono text-[clamp(2.4rem,12vw,5.5rem)] leading-none font-semibold tracking-tight"
      role="timer"
      aria-live="off"
      aria-label={`Elapsed time ${hours} hours ${minutes} minutes ${seconds} point ${centis} seconds`}
    >
      <span className={segment}>{hours}</span>
      <span className="px-1 sm:px-2">{colon}</span>
      <span className={segment}>{minutes}</span>
      <span className="px-1 sm:px-2">{colon}</span>
      <span className={segment}>{seconds}</span>
      <span className="text-muted-foreground/60">.</span>
      <span className={`${segment} text-primary text-[0.62em]`}>{centis}</span>
    </div>
  );
}
