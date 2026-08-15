import { useCallback, useEffect, useRef, useState } from "react";
import type { Lap, StopwatchStatus } from "@/lib/stopwatch";

const now = () =>
  typeof performance !== "undefined" && typeof performance.now === "function"
    ? performance.now()
    : Date.now();

export function useStopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [status, setStatus] = useState<StopwatchStatus>("ready");
  const [laps, setLaps] = useState<Lap[]>([]);

  const startedAt = useRef(0);
  const baseline = useRef(0);
  const frame = useRef<number | null>(null);
  const lapIdRef = useRef(0);

  const stopLoop = useCallback(() => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    setElapsed(baseline.current + (now() - startedAt.current));
    frame.current = requestAnimationFrame(tick);
  }, []);

  const start = useCallback(() => {
    if (status === "running") return;
    startedAt.current = now();
    stopLoop();
    frame.current = requestAnimationFrame(tick);
    setStatus("running");
  }, [status, stopLoop, tick]);

  const pause = useCallback(() => {
    if (status !== "running") return;
    stopLoop();
    baseline.current += now() - startedAt.current;
    setElapsed(baseline.current);
    setStatus("paused");
  }, [status, stopLoop]);

  const toggle = useCallback(() => {
    if (status === "running") pause();
    else start();
  }, [status, pause, start]);

  const reset = useCallback(() => {
    stopLoop();
    baseline.current = 0;
    startedAt.current = 0;
    setElapsed(0);
    setLaps([]);
    setStatus("ready");
  }, [stopLoop]);

  const recordLap = useCallback(() => {
    if (status === "ready") return;
    const total =
      status === "running" ? baseline.current + (now() - startedAt.current) : baseline.current;
    setLaps((prev) => {
      const previousTotal = prev[prev.length - 1]?.total ?? 0;
      lapIdRef.current += 1;
      return [
        ...prev,
        {
          id: lapIdRef.current,
          index: prev.length + 1,
          duration: total - previousTotal,
          total,
        },
      ];
    });
  }, [status]);

  const clearLaps = useCallback(() => setLaps([]), []);

  useEffect(() => stopLoop, [stopLoop]);

  return { elapsed, status, laps, start, pause, toggle, reset, recordLap, clearLaps };
}
