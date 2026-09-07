import BalanceCard from "@/components/dashboard/BalanceCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

export default function DashboardPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
      
      <div className="animate-fade-up">
        <p className="text-sm font-semibold text-red-800 dark:text-red-400">
          Personal Banking
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Welcome back, Demo User
        </h1>

        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          Here&apos;s your account overview.
        </p>
      </div>

      <div className="animate-fade-up [animation-delay:100ms]">
        <BalanceCard />
      </div>

      <div className="animate-fade-up [animation-delay:150ms]">
        <QuickActions />
      </div>

      <div className="animate-fade-up [animation-delay:200ms]">
        <RecentTransactions />
      </div>

    </main>
  );
}