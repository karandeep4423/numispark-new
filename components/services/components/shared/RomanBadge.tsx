interface RomanBadgeProps {
  number: string;
  dark?: boolean;
}

export default function RomanBadge({ number, dark }: RomanBadgeProps) {
  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[5px] ${
        dark ? "bg-[#222]" : "bg-[#f1f1f1]"
      }`}
    >
      <span
        className={`font-[Roboto_Mono] text-[18px] font-light ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {number}
      </span>
    </div>
  );
}
