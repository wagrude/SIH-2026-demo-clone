import Link from "next/link";

const actions = [
  {
    title: "Transfer",
    description: "Move money securely",
    symbol: "↗",
  },
  {
    title: "Pay Bills",
    description: "Manage your bills",
    symbol: "₹",
  },
  {
    title: "Transactions",
    description: "View account activity",
    symbol: "↔",
    href: "/transactions",
  },
  {
    title: "Statement",
    description: "Download statement",
    symbol: "↓",
  },
];

export default function QuickActions() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-bold text-slate-950 dark:text-white">
        Quick Actions
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const content = (
            <>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-lg font-bold text-red-900 dark:bg-red-950/60 dark:text-red-300">
                {action.symbol}
              </div>

              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  {action.title}
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {action.description}
                </p>
              </div>
            </>
          );

          if (action.href) {
            return (
              <Link
                key={action.title}
                href={action.href}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-red-900"
              >
                {content}
              </Link>
            );
          }

          return (
            <button
              key={action.title}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-red-900"
            >
              {content}
            </button>
          );
        })}
      </div>
    </section>
  );
}