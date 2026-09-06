import BankLogo from "@/components/branding/BankLogo";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
          <section className="hidden bg-blue-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <BankLogo />

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
                Secure Digital Banking
              </p>

              <h1 className="max-w-md text-4xl font-bold leading-tight">
                Banking that puts security first.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-blue-100">
                Manage your accounts, view transactions, and access your
                banking information securely.
              </p>
            </div>

            <div className="text-sm text-blue-200">
              Secure Banking Services
            </div>
          </section>

          <section className="p-6 sm:p-10 lg:p-12">
            <div className="mb-8 lg:hidden">
              <BankLogo />
            </div>

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold text-blue-800">
                Welcome Back
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Enter your Customer ID and Password to continue.
              </p>
            </div>

            <LoginForm />
          </section>
        </div>
      </div>
    </main>
  );
}