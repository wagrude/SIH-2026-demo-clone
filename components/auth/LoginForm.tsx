"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { validateCredentials } from "@/lib/auth";
import { demoUser } from "@/data/user";

export default function LoginForm() {
  const router = useRouter();

  const [customerId, setCustomerId] = useState(demoUser.customerId);
  const [password, setPassword] = useState(demoUser.password);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const valid = validateCredentials(customerId, password);

    if (!valid) {
      setError("Invalid Customer ID or Password.");
      return;
    }

    if (rememberMe) {
      localStorage.setItem("securebank-auth", "true");
    } else {
      sessionStorage.setItem("securebank-auth", "true");
    }

    document.cookie = "securebank-auth=true; path=/; SameSite=Lax";

    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="customer-id"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Customer ID
        </label>

        <input
          id="customer-id"
          name="customerId"
          type="text"
          value={customerId}
          onChange={(event) => setCustomerId(event.target.value)}
          autoComplete="username"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
        <input
          id="remember-me"
          name="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-blue-800"
        />
        Remember me
      </label>

      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {error}
        </div>
      )}

      <button
        id="login-button"
        type="submit"
        aria-label="Login to Punjab National Bank demo"
        className="w-full rounded-xl bg-blue-900 px-4 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Login
      </button>

      <div className="flex justify-between text-sm">
        <button
          type="button"
          className="font-medium text-blue-800 hover:underline"
        >
          Forgot Customer ID?
        </button>

        <button
          type="button"
          className="font-medium text-blue-800 hover:underline"
        >
          Forgot Password?
        </button>
      </div>
    </form>
  );
}