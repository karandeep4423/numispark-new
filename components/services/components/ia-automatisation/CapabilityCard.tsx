import type { Capability } from "@/components/services/data/ia-automatisation";

interface CapabilityCardProps {
  cap: Capability;
  active: boolean;
  onHover: () => void;
}

export default function CapabilityCard({
  cap,
  active,
  onHover,
}: CapabilityCardProps) {
  return (
    <article
      onMouseEnter={onHover}
      className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 ${
        active
          ? "border-[#05ffe0]/60 bg-[#0a0a0a] shadow-[0_0_60px_-20px_rgba(5,255,224,0.45)]"
          : "border-white/10 bg-[#0a0a0a]/60"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ${
          active ? "opacity-100" : "group-hover:opacity-100"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(5,255,224,0.18) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-[Roboto_Mono] text-[11px] uppercase tracking-wider text-[#05ffe0]">
            {cap.tag}
          </span>
          <span className="font-[Roboto_Mono] text-[11px] text-white/40">
            {cap.number}
          </span>
        </div>
        <h3 className="mt-6 font-[Neue_Montreal] text-[22px] font-medium leading-tight text-white sm:text-[26px]">
          {cap.title}
        </h3>
        <p className="mt-3 font-[Neue_Montreal] text-[15px] leading-[1.7] text-white/55">
          {cap.description}
        </p>
      </div>
    </article>
  );
}
