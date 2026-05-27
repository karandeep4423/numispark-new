"use client";

import { useEffect, useState } from "react";
import { ROTATING_WORDS } from "@/components/services/data/ia-automatisation";

export default function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block align-baseline">
      <span
        key={index}
        className="inline-block bg-gradient-to-r from-[#05ffe0] to-white bg-clip-text text-transparent"
        style={{ animation: "fadeUp 0.6s ease forwards" }}
      >
        {ROTATING_WORDS[index]}
      </span>
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.12em] bg-[#05ffe0] animate-ai-blink" />
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </span>
  );
}
