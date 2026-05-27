import Image from "next/image";

export function CheckIcon() {
  return (
    <Image
      src="/audit-seo-gratuit/check.svg"
      alt=""
      width={24}
      height={17}
      className="shrink-0"
      unoptimized
    />
  );
}

export function CheckIconSmall() {
  return (
    <Image
      src="/audit-seo-gratuit/check-small.svg"
      alt=""
      width={18}
      height={13}
      className="shrink-0"
      unoptimized
    />
  );
}
