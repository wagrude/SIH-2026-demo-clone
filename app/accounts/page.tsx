import AccountCard from "@/components/accounts/AccountCard";

export default function AccountsPage() {
  return (
    <main className="space-y-8 animate-fade-up">
      <div>
        <p className="text-sm font-semibold text-red-800 dark:text-red-300">
          Personal Banking
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
          Accounts
        </h1>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Manage your banking account information.
        </p>
      </div>

      <AccountCard />
    </main>
  );
}