"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("bank-theme-change", callback);

  return () => {
    window.removeEventListener("bank-theme-change", callback);
  };
}

function getSnapshot() {
  return localStorage.getItem("bank-theme") === "dark";
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function toggleTheme() {
    const nextDark = !dark;

    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("bank-theme", nextDark ? "dark" : "light");

    window.dispatchEvent(new Event("bank-theme-change"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}