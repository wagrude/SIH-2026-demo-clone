import { transactions } from "@/data/transactions";
import TransactionRow from "@/components/transactions/TransactionRow";

export default function TransactionTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table
          id="transactions-table"
          aria-label="Account transactions"
          className="w-full min-w-[800px] border-collapse"
        >
          <thead className="bg-slate-50 dark:bg-slate-800/70">
            <tr>
              {["Date", "Description", "Type", "Amount", "Balance"].map(
                (heading) => (
                  <th
                    key={heading}
                    className={`px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 ${
                      heading === "Amount" || heading === "Balance"
                        ? "text-right"
                        : "text-left"
                    }`}
                  >
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}