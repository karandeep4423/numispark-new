"use client"
import React from 'react'

const ToolsSection = () => {
  return (
    <div className='max-w-7xl mx-auto w-full'>
         <div className="mt-16 ml-4 md:ml-16 pb-16 overflow-hidden">
        <div className="mb-8 px-4">
          <p className="font-mono text-[14px] font-normal text-black">
            La boite à outils du quotidien
          </p>
          <p className="font-[Neue_Montreal] text-[14px] text-[#7F7F7F] mt-1">
            Une maîtrise parfaite pour chaque projet.
          </p>
        </div>

        {/* Marquee track */}
        <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[
              { src: "/images/card-illustration-01.svg", alt: "Figma" },
              { src: "/images/card-illustration-02.svg", alt: "Swift" },
              { src: "/images/card-illustration-03.svg", alt: "Webflow" },
              { src: "/images/card-illustration-04.svg", alt: "Meta" },
              {
                src: "/images/capture-decran-20260310-a-1052222.svg",
                alt: "Shopify",
              },
              { src: "/images/card-illustration-01.svg", alt: "AWS" },
              { src: "/images/card-illustration-02.svg", alt: "React" },
              { src: "/images/card-illustration-03.svg", alt: "Node" },
              {
                src: "/images/card-illustration-04.svg",
                alt: "TypeScript",
              },
              {
                src: "/images/capture-decran-20260310-a-1052222.svg",
                alt: "Next.js",
              },
              /* duplicate for seamless loop */
              { src: "/images/card-illustration-01.svg", alt: "Figma" },
              { src: "/images/card-illustration-02.svg", alt: "Swift" },
              { src: "/images/card-illustration-03.svg", alt: "Webflow" },
              { src: "/images/card-illustration-04.svg", alt: "Meta" },
              {
                src: "/images/capture-decran-20260310-a-1052222.svg",
                alt: "Shopify",
              },
              { src: "/images/card-illustration-01.svg", alt: "AWS" },
              { src: "/images/card-illustration-02.svg", alt: "React" },
              { src: "/images/card-illustration-03.svg", alt: "Node" },
              {
                src: "/images/card-illustration-04.svg",
                alt: "TypeScript",
              },
              {
                src: "/images/capture-decran-20260310-a-1052222.svg",
                alt: "Next.js",
              },
            ].map((logo, i) => (
              <div
                key={i}
                className="group shrink-0 w-35 h-25 bg-[#F2F2F2] rounded-xl flex items-center justify-center p-4 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolsSection