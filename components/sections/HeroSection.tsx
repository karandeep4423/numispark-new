"use client";
import React, { useEffect, useRef } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section
      className={`relative w-full  h-screen overflow-hidden bg-[#0a0a12] ${className}`}
    >
      {/* Background video — full cover on mobile, offset on desktop */}
      {videoSrc && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center md:inset-auto md:top-[-40%] md:right-[-25%] md:w-[180%] md:h-[160%]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          {/* Mobile: small compressed file (no audio track — required for iOS autoplay) */}
          <source
            src={videoSrc.replace(/\.mp4$/, "-mobile.mp4")}
            media="(max-width: 767px)"
            type="video/mp4"
          />
          {/* Desktop: full quality */}
          <source src={videoSrc} type="video/mp4" />
        </video>
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
        <h1 className="font-[Neue_Montreal] text-[44px] font-medium text-white leading-[1.186]">
          {title}
        </h1>
        {description && (
          <div className="flex items-center justify-center rounded-[5px] bg-[rgba(46,46,46,0.70)] backdrop-blur-[20px] px-6 py-8">
            <p className="text-white font-mono text-[15px] font-normal leading-5.75">
              {description}
            </p>
          </div>
        )}
      </div>

      {/* Desktop layout — title bottom-left, description bottom-right */}
      <div className="hidden md:flex absolute inset-x-0 bottom-16 z-10 items-end justify-between gap-8 px-[70px] xl:px-[126px]">
        <h1 className="font-[Neue_Montreal] text-5xl font-medium text-white leading-[1.186]">
          {title}
        </h1>
        {description && (
          <div className="flex items-center justify-center shrink-0 rounded-[5px] bg-[rgba(46,46,46,0.70)] backdrop-blur-[20px] w-[300px] xl:w-[453px] h-[147px] px-[42px] py-[55px] gap-[10px]">
            <p className="w-[250px] xl:w-[369px] shrink-0 text-white font-mono text-[15px] font-normal leading-5.75">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
