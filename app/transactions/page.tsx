import TransactionTable from "@/components/transactions/TransactionTable";

export default function TransactionsPage() {
  return (
    <main className="space-y-8 animate-fade-up">
      <div>
        <p className="text-sm font-semibold text-red-800 dark:text-red-300">
          Account Activity
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
          Transactions
        </h1>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Review recent activity on your savings account.
        </p>
      </div>

      <section
        id="transaction-summary"
        className="grid gap-4 sm:grid-cols-3"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Transactions
          </p>

          <p
            id="transaction-count"
            className="mt-2 text-2xl font-bold text-slate-950 dark:text-white"
          >
            10
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Account Type
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
            Savings
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Currency
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
            INR
          </p>
        </div>
      </section>

      <TransactionTable />
    </main>
  );
}