"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { CHAT_SCRIPT } from "@/components/services/data/ia-automatisation";

export default function ChatDemo() {
  const [containerRef, inView] = useInView<HTMLDivElement>({ threshold: 0.25 });
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const run = (i: number) => {
      if (cancelled || i >= CHAT_SCRIPT.length) {
        timeouts.push(
          setTimeout(() => {
            if (cancelled) return;
            setVisibleCount(0);
            run(0);
          }, 4000),
        );
        return;
      }
      const turn = CHAT_SCRIPT[i];
      const delay = turn.from === "ai" ? 1200 : 600;

      if (turn.from === "ai") {
        setTyping(true);
        timeouts.push(
          setTimeout(() => {
            if (cancelled) return;
            setTyping(false);
            setVisibleCount(i + 1);
            timeouts.push(setTimeout(() => run(i + 1), 1400));
          }, delay),
        );
      } else {
        timeouts.push(
          setTimeout(() => {
            if (cancelled) return;
            setVisibleCount(i + 1);
            timeouts.push(setTimeout(() => run(i + 1), 1200));
          }, delay),
        );
      }
    };

    run(0);
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [inView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#111]/80 p-5 backdrop-blur-sm shadow-[0_30px_80px_rgba(5,255,224,0.08)]"
    >
      <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-3">
        <span className="h-2 w-2 rounded-full bg-[#05ffe0] animate-ai-pulse" />
        <span className="font-[Roboto_Mono] text-[11px] uppercase tracking-wider text-white/60">
          Numispark · Assistant IA
        </span>
      </div>

      <div className="flex min-h-[260px] flex-col gap-3">
        {CHAT_SCRIPT.slice(0, visibleCount).map((turn, i) => (
          <div
            key={i}
            className={`flex ${
              turn.from === "user" ? "justify-end" : "justify-start"
            }`}
            style={{ animation: "chatIn 0.35s ease forwards" }}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 font-[Neue_Montreal] text-[14px] leading-[1.5] ${
                turn.from === "user"
                  ? "bg-white/10 text-white"
                  : "bg-[#05ffe0] text-black"
              }`}
            >
              {turn.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1.5 rounded-2xl bg-[#05ffe0]/15 px-4 py-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#05ffe0] animate-ai-pulse" />
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#05ffe0] animate-ai-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#05ffe0] animate-ai-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes chatIn {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
