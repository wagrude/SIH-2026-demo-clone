import Image from "next/image";

export default function BankLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex shrink-0 items-center">
      <Image
        src="/images/pnb-logo.png"
        alt="Punjab National Bank"
        width={320}
        height={100}
        priority
        className="h-auto w-[240px] object-contain sm:w-[260px]"
      />
    </div>
  );
}