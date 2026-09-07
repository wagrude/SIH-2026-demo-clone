"use client";

import { FormEvent, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { validateCredentials } from "@/lib/auth";
import { demoUser } from "@/data/user";

export default function LoginForm() {
  const router = useRouter();

  const [customerId, setCustomerId] = useState(demoUser.customerId);
  const [password, setPassword] = useState(demoUser.password);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      {/* Customer ID */}
      <div>
        <label
          htmlFor="customer-id"
          className="mb-2 block text-sm font-semibold text-[#39252b]"
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
          className="w-full rounded-xl border border-[#d8cbd0] bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 hover:border-[#b88a96] focus:border-[#8f1731] focus:ring-4 focus:ring-[#8f1731]/10"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-[#39252b]"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
           className="w-full rounded-xl border border-[#d8cbd0] bg-white px-4 py-3 pr-12 text-slate-900 shadow-sm outline-none transition-all duration-200 hover:border-[#b88a96] focus:border-[#8f1731] focus:ring-4 focus:ring-[#8f1731]/10"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-[#8f1731] focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
        <input
          id="remember-me"
          name="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
          className="h-4 w-4 rounded border-slate-300 accent-[#8f1731]"
        />
        Remember me
      </label>

      {/* Error Message */}
      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {error}
        </div>
      )}

      {/* Login Button */}
      <button
        id="login-button"
        type="submit"
        aria-label="Login to Punjab National Bank demo"
        className="w-full rounded-xl bg-[#8f1731] px-4 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(143,23,49,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#741128] hover:shadow-[0_12px_28px_rgba(143,23,49,0.28)] active:translate-y-0 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#e5b83f] focus:ring-offset-2"
       > Login
      </button>
        {/* Security Indicator */}
<div className="flex items-center justify-center gap-2 py-1">
  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8f1731]/10">
    <Lock size={14} className="text-[#8f1731]" />
  </div>

  <p className="text-xs text-slate-500">
    Secure authentication protects your banking information.
  </p>
</div>

      {/* Forgot Links */}
      <div className="flex justify-between text-sm">
        <button
          type="button"
          className="font-semibold text-[#8f1731] transition hover:text-[#5f0e24] hover:underline"
        >
          Forgot Customer ID?
        </button>

        <button
          type="button"
          className="font-semibold text-[#8f1731] transition hover:text-[#5f0e24] hover:underline"
        >
          Forgot Password?
        </button>
      </div>
    </form>
  );
}