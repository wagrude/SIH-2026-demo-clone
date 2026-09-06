export default function BankLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border-2 border-[#e5b83f] bg-[#8f1731] text-sm font-extrabold text-white shadow-lg shadow-black/10">
        <span className="absolute -right-2 -top-2 h-7 w-7 rounded-full border-2 border-[#e5b83f]/70" />
        <span className="relative">PNB</span>
      </div>

      <div>
        <div
          className={`text-lg font-bold tracking-tight ${
            light ? "text-white" : "text-[#4a1020] dark:text-white"
          }`}
        >
          Punjab National Bank
        </div>

        <div
          className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
            light ? "text-[#f2d98a]" : "text-[#8f1731] dark:text-[#e5b83f]"
          }`}
        >
          Digital Banking
        </div>
      </div>
    </div>
  );
}
