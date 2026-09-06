import { demoAccount } from "@/data/account";

export default function AccountCard() {
  return (
    <section
      id="primary-account"
      data-account-type={demoAccount.accountType}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-red-800 dark:text-red-300">
            Primary Account
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">
            {demoAccount.accountType} Account
          </h2>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
          Active
        </span>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Account Number
          </p>

          <p
            id="account-number"
            data-sensitive-field="account-number"
            className="mt-2 font-semibold text-slate-900 dark:text-slate-100"
          >
            {demoAccount.maskedAccountNumber}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            IFSC Code
          </p>

          <p
            id="ifsc-code"
            data-sensitive-field="ifsc"
            className="mt-2 font-semibold text-slate-900 dark:text-slate-100"
          >
            {demoAccount.ifsc}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Available Balance
          </p>

          <p
            id="account-balance"
            data-sensitive-field="balance"
            className="mt-2 text-xl font-bold text-slate-950 dark:text-white"
          >
            ₹
            {demoAccount.balance.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Currency
          </p>

          <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">
            {demoAccount.currency}
          </p>
        </div>
      </div>
    </section>
  );
}