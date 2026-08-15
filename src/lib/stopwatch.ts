export interface Lap {
  id: number;
  index: number;
  /** duration of this lap in ms */
  duration: number;
  /** total elapsed at the moment of the lap in ms */
  total: number;
}

export type StopwatchStatus = "ready" | "running" | "paused";

export interface TimeParts {
  hours: string;
  minutes: string;
  seconds: string;
  centis: string;
}

const pad = (value: number, size = 2) => String(Math.floor(value)).padStart(size, "0");

export function splitTime(ms: number): TimeParts {
  const safe = Math.max(0, ms);
  return {
    hours: pad(safe / 3_600_000),
    minutes: pad((safe % 3_600_000) / 60_000),
    seconds: pad((safe % 60_000) / 1000),
    centis: pad((safe % 1000) / 10),
  };
}

/** Compact form used in lap rows: MM:SS.CC (or HH:MM:SS.CC past an hour) */
export function formatLapTime(ms: number): string {
  const { hours, minutes, seconds, centis } = splitTime(ms);
  return hours === "00"
    ? `${minutes}:${seconds}.${centis}`
    : `${hours}:${minutes}:${seconds}.${centis}`;
}

export function lapStats(laps: Lap[]) {
  if (laps.length === 0) return null;
  const durations = laps.map((lap) => lap.duration);
  const best = Math.min(...durations);
  const average = durations.reduce((sum, d) => sum + d, 0) / durations.length;
  return { count: laps.length, best, average };
}
