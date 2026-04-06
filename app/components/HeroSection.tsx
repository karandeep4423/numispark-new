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
      {/* Background video */}
      {videoSrc && (
        <video
          className="absolute top-[-40%] right-[-25%] w-[180%] h-[160%] object-cover"
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
          className="absolute top-[-40%] right-[-25%] w-[180%] h-[160%] object-cover"
          src={imageSrc}
          alt=""
        />
      )}

      {/* Optional dark overlay */}
      {/* {overlay && <div className="absolute inset-0 bg-black/30" />} */}

      {/* Title — anchored bottom-left */}
      <div className="absolute bottom-16 left-12 max-w-xl z-10">
        <h1 className="text-5xl text-white leading-tight tracking-tight">
          {title}
        </h1>
      </div>

      {/* Description card — anchored bottom-right */}
      {description && (
        <div className="absolute bottom-16 right-12 z-10 max-w-xs bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
          <p className="text-white/60 text-sm leading-relaxed font-mono">
            {description}
          </p>
        </div>
      )}
    </section>
  );
}
