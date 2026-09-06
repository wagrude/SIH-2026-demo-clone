"use client";

import { usePathname, useRouter } from "next/navigation";
import BankLogo from "@/components/branding/BankLogo";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const canGoBack = pathname !== "/dashboard";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {canGoBack && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg font-bold text-slate-700 shadow-sm transition hover:-translate-x-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              ←
            </button>
          )}

          <BankLogo />
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          <div className="hidden text-right sm:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Demo User
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Customer ID: 1234567890
            </p>
          </div>

          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900 text-sm font-bold text-white shadow-sm"
            aria-label="User profile"
          >
            DU
          </div>
        </div>
      </div>
    </header>
  );
}