import { demoUser } from "@/data/user";

export default function PersonalInformation() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 className="text-lg font-bold text-slate-950 dark:text-white">
          Personal Information
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Your registered personal information.
        </p>
      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2">
        {[
          ["Full Name", demoUser.name, "customer-name", "name"],
          ["Email", demoUser.email, "customer-email", "email"],
          ["Phone", demoUser.phone, "customer-phone", "phone"],
          ["Aadhaar", demoUser.aadhaar, "customer-aadhaar", "aadhaar"],
          ["PAN", demoUser.pan, "customer-pan", "pan"],
        ].map(([label, value, id, field]) => (
          <div key={id}>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {label}
            </p>

            <p
              id={id}
              data-sensitive-field={field}
              className="mt-2 font-semibold text-slate-900 dark:text-slate-100"
            >
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}