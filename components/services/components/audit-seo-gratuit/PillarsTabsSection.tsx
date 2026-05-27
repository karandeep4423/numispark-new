"use client";

import { useState } from "react";
import { PILLAR_TABS } from "@/components/services/data/audit-seo";
import { CheckIconSmall } from "./CheckIcons";

export default function PillarsTabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto max-w-7xl w-full px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
      <h2 className="mb-10 text-center font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[36px] lg:text-[44px] xl:text-[52px]">
        Notre audit SEO gratuit couvre les{" "}
        <span className="text-[#05ffe0]">
          3 piliers essentiels du référencement
        </span>
      </h2>

      <div className="mx-auto mb-10 flex w-fit items-center rounded-full bg-[#222] p-1">
        {PILLAR_TABS.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            className={`rounded-full px-4 py-3 font-[Roboto_Mono] text-[11px] uppercase text-white transition-colors duration-200 sm:px-8 sm:text-[12px] ${
              activeTab === i ? "bg-[#383838]" : "hover:bg-[#2a2a2a]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-8">
          <div className="relative aspect-582/699 w-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f]">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #05ffe0 1.5px, transparent 1.5px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <video
                src="/audit-seo-gratuit/seo-3-piliers.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-1 font-[Roboto_Mono] text-[12px] text-[#05ffe0]">
            {String(activeTab + 1).padStart(2, "0")}
          </p>
          <h3
            className="mb-3 font-[Neue_Montreal] text-[20px] leading-relaxed sm:text-[22px]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #fff 0%, #05ffe0 56%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {PILLAR_TABS[activeTab].heading}
          </h3>

          <h4 className="mb-3 font-[Neue_Montreal] text-[22px] font-medium leading-tight text-white sm:text-[26px]">
            {PILLAR_TABS[activeTab].subheading}
          </h4>
          <p className="mb-6 font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-[#7f7f7f]">
            {PILLAR_TABS[activeTab].description}
          </p>

          {PILLAR_TABS[activeTab].subSections.map((section, si) => (
            <div key={si}>
              {section.title && (
                <div className="flex items-center gap-2 pb-1 pt-5">
                  <span className="font-[Roboto_Mono] text-[12px] text-[#05ffe0]">
                    {"»"}
                  </span>
                  <span className="font-[Neue_Montreal] text-[15px] font-medium text-[#05ffe0]">
                    {section.title}
                  </span>
                </div>
              )}

              <div className="flex flex-col">
                {section.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-4 py-3.5">
                      <CheckIconSmall />
                      <p className="font-[Neue_Montreal] text-[14px] leading-6 text-white sm:text-[16px]">
                        {item}
                      </p>
                    </div>
                    <div className="h-px w-full bg-[#2a2a2a]" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
