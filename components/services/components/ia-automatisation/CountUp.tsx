"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/hooks/useInView";

interface CountUpProps {
  end: number;
  suffix: string;
}

export default function CountUp({ end, suffix }: CountUpProps) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
