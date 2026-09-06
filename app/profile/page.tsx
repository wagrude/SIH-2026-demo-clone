import AccountInformation from "@/components/profile/AccountInformation";
import PersonalInformation from "@/components/profile/PersonalInformation";

export default function ProfilePage() {
  return (
    <main className="space-y-8 animate-fade-up">
      <div>
        <p className="text-sm font-semibold text-red-800 dark:text-red-300">
          Customer Profile
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
          Profile
        </h1>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Your personal and account information.
        </p>
      </div>

      <PersonalInformation />

      <AccountInformation />
    </main>
  );
}