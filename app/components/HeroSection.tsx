import React from "react";

interface HeroSectionProps {
  /** Path to a video file (takes priority over imageSrc) */
  videoSrc?: string;
  /** Path to a fallback image if no video is provided */
  imageSrc?: string;
  /** Main heading content — accepts a string or JSX for styled spans */
  title: React.ReactNode;
  /** Optional description shown in a card at the bottom-right */
  description?: string;
  /** Add a dark overlay on top of the media (default: true) */
  overlay?: boolean;
  /** Extra classes on the outer section element */
  className?: string;
}

export default function HeroSection({
  videoSrc,
  imageSrc,
  title,
  description,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full h-screen overflow-hidden bg-[#0a0a12] ${className}`}
    >
      {/* Background video — full cover on mobile, offset on desktop */}
      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover object-center md:inset-auto md:top-[-40%] md:right-[-25%] md:w-[180%] md:h-[160%]"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Background image (fallback when no video) */}
      {imageSrc && !videoSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="absolute inset-0 w-full h-full object-cover object-center md:inset-auto md:top-[-40%] md:right-[-25%] md:w-[180%] md:h-[160%]"
          src={imageSrc}
          alt=""
        />
      )}

      {/* Gradient overlay for text readability on mobile */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/75 md:hidden" />

      {/* Mobile layout — title + description stacked at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-3 px-5 pb-8 pt-24 md:hidden">
        <h1 className="text-[44px] font-medium text-white leading-[1.1] tracking-tight">
          {title}
        </h1>
        {description && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <p className="text-white/60 text-sm leading-relaxed font-mono">
              {description}
            </p>
          </div>
        )}
      </div>

      {/* Desktop layout — title bottom-left, description bottom-right */}
      <div className="hidden md:block absolute bottom-16 left-12 max-w-xl z-10">
        <h1 className="text-[clamp(28px,7vw,54px)] text-white leading-tight tracking-tight">
          {title}
        </h1>
      </div>
      {description && (
        <div className="hidden md:block absolute bottom-16 right-12 max-w-xs z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
          <p className="text-white/60 text-sm leading-relaxed font-mono">
            {description}
          </p>
        </div>
      )}
    </section>
  );
}
