import Link from "next/link";
import React from "react";
import Image from "next/image";

export type CtaVariant =
  | "outline"
  | "filled-cyan"
  | "filled-white"
  | "outline-light"
  | "outline-footer";

const variantClasses: Record<CtaVariant, string> = {
  // Light background — transparent with black border → hover: cyan
  outline:
    "bg-transparent border border-black text-black hover:bg-[#05ffe0] hover:border-[#05ffe0]",
  // Cyan solid → hover: white
  "filled-cyan":
    "bg-[#05ffe0] border border-[#05ffe0] text-black hover:bg-white hover:border-white",
  // White solid (on dark hero) → hover: cyan
  "filled-white":
    "bg-white border border-white text-black hover:bg-[#05ffe0] hover:border-[#05ffe0]",
  // Outline on dark bg (white text) → hover: slight white bg
  "outline-light":
    "bg-transparent border border-white/50 text-white hover:border-white hover:bg-white/10",
  // Outline on dark bg with full white hover fill
  "outline-footer":
    "bg-transparent border border-white/25 text-white hover:bg-white hover:text-black hover:border-white",
};

interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: CtaVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function CtaButton({
  children,
  href,
  variant = "outline",
  className = "",
  onClick,
  type = "button",
}: CtaButtonProps) {
  const base = `group inline-flex items-center gap-[42px] px-[20px] py-[13px] rounded-[60px] font-mono text-[14px] font-normal uppercase tracking-wide transition-all duration-300 ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <Image
        src="/faq-btn.svg"
        width={18}
        height={18}
        alt="FAQ Button Icon"
        className="shrink-0 transition-transform duration-300 group-hover:rotate-180"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {content}
    </button>
  );
}
