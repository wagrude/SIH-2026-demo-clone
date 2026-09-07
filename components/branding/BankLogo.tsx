import Image from "next/image";

export default function BankLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center">
      <Image
        src="/images/pnb-logo.png"
        alt="Punjab National Bank"
        width={320}
        height={100}
        priority
        className="h-auto w-[280px] object-contain"
      />
    </div>
  );
}