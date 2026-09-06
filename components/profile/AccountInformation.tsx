import { demoUser } from "@/data/user";
import { demoAccount } from "@/data/account";

export default function AccountInformation() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 className="text-lg font-bold text-slate-950 dark:text-white">
          Account Information
        </h2>
      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Customer ID
          </p>

          <p
            id="customer-id"
            data-sensitive-field="customer-id"
            className="mt-2 font-semibold text-slate-900 dark:text-slate-100"
          >
            {demoUser.customerId}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Account Number
          </p>

          <p
            id="profile-account-number"
            data-sensitive-field="account-number"
            className="mt-2 font-semibold text-slate-900 dark:text-slate-100"
          >
            {demoAccount.maskedAccountNumber}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Account Type
          </p>

          <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">
            {demoAccount.accountType}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            IFSC
          </p>

          <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">
            {demoAccount.ifsc}
          </p>
        </div>
      </div>
    </section>
  );
}