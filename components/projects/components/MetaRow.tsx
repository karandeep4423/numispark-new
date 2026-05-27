interface MetaRowProps {
  label: string;
  value: string;
  isLast?: boolean;
}

export default function MetaRow({ label, value, isLast = false }: MetaRowProps) {
  return (
    <div>
      <p className="font-[Neue_Montreal] text-[19px] text-white py-5">
        <span className="text-white/50">{label} : </span>
        {value}
      </p>
      {!isLast && <div className="h-px bg-[#474747]" />}
    </div>
  );
}
