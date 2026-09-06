import { Transaction } from "@/types/transaction";

interface TransactionRowProps {
  transaction: Transaction;
}

export default function TransactionRow({
  transaction,
}: TransactionRowProps) {
  const isCredit = transaction.type === "Credit";

  return (
    <tr
      id={`transaction-${transaction.id}`}
      data-transaction-id={transaction.id}
      data-transaction-type={transaction.type}
      aria-label={`Transaction ${transaction.id}`}
      className="transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
    >
      <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
        {transaction.date}
      </td>

      <td className="px-5 py-4">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            {transaction.description}
          </p>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {transaction.category}
          </p>
        </div>
      </td>

      <td className="px-5 py-4">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            isCredit
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          {transaction.type}
        </span>
      </td>

      <td
        data-sensitive-field="transaction-amount"
        className={`px-5 py-4 text-right font-bold ${
          isCredit
            ? "text-emerald-700 dark:text-emerald-400"
            : "text-slate-900 dark:text-slate-100"
        }`}
      >
        {isCredit ? "+" : "-"}₹
        {transaction.amount.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
        })}
      </td>

      <td
        data-sensitive-field="transaction-balance"
        className="px-5 py-4 text-right text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        ₹
        {transaction.balance.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
        })}
      </td>
    </tr>
  );
}