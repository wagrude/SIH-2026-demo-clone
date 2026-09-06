"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "▣" },
  { name: "Accounts", href: "/accounts", icon: "◫" },
  { name: "Transactions", href: "/transactions", icon: "↔" },
  { name: "Profile", href: "/profile", icon: "◎" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    localStorage.removeItem("securebank-auth");
    sessionStorage.removeItem("securebank-auth");

    document.cookie =
      "securebank-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    router.push("/login");
  }

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:block">
      <div className="flex min-h-screen flex-col">
        <nav className="flex-1 space-y-1 p-4" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-red-50 text-red-900 dark:bg-red-950/50 dark:text-red-300"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                }`}
              >
                <span className="w-5 text-center text-base" aria-hidden="true">
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-200 p-4 dark:border-slate-800">
          <button
            id="logout-button"
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-600 transition hover:bg-red-50 hover:text-red-700 dark:text-slate-400 dark:hover:bg-red-950/40 dark:hover:text-red-300"
          >
            <span className="w-5 text-center" aria-hidden="true">
              ↪
            </span>
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}