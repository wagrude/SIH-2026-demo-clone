import { demoAccount } from "@/data/account";

export default function BalanceCard() {
  return (
    <section
      aria-label="Savings account balance"
      className="overflow-hidden rounded-2xl bg-gradient-to-br from-red-950 via-red-900 to-red-800 p-6 text-white shadow-lg sm:p-8"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-red-200">
            Savings Account
          </p>

          <p className="mt-2 text-sm text-red-100">
            A/C: {demoAccount.maskedAccountNumber}
          </p>
        </div>

        <span className="rounded-lg border border-red-700/80 bg-red-950/30 px-3 py-1 text-xs font-semibold text-red-100">
          {demoAccount.accountType}
        </span>
      </div>

      <div className="mt-10">
        <p className="text-sm text-red-200">Available Balance</p>

        <p
          id="available-balance"
          className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          ₹
          {demoAccount.balance.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-red-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-red-50">
          Transfer
        </button>

        <button className="rounded-xl border border-red-700 bg-red-950/20 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-950/50">
          Pay Bills
        </button>

        <a
          href="/transactions"
          className="rounded-xl border border-red-700 bg-red-950/20 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-950/50"
        >
          View Transactions
        </a>
      </div>
    </section>
  );
}