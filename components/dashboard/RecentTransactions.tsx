import Link from "next/link";
import { transactions } from "@/data/transactions";

export default function RecentTransactions() {
  const recentTransactions = transactions.slice(0, 3);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">
            Recent Transactions
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Your latest account activity
          </p>
        </div>

        <Link
          href="/transactions"
          className="text-sm font-bold text-red-800 hover:underline dark:text-red-300"
        >
          View all
        </Link>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {recentTransactions.map((transaction) => (
          <div
            key={transaction.id}
            data-transaction-id={transaction.id}
            className="flex items-center justify-between gap-4 px-6 py-5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                {transaction.description}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {transaction.date} · {transaction.category}
              </p>
            </div>

            <p
              className={`shrink-0 text-sm font-bold ${
                transaction.type === "Credit"
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-slate-900 dark:text-slate-200"
              }`}
            >
              {transaction.type === "Credit" ? "+" : "-"}₹
              {transaction.amount.toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}