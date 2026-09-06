export default function BankLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-900 text-sm font-extrabold text-white shadow-sm">
        PNB
      </div>

      <div>
        <div className="text-lg font-bold tracking-tight text-slate-900">
          Punjab National Bank
        </div>

        <div className="text-xs font-medium uppercase tracking-widest text-slate-500">
          Digital Banking
        </div>
      </div>
    </div>
  );
}