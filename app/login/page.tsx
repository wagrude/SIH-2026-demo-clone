import BankLogo from "@/components/branding/BankLogo";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ec]">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[28px] border border-[#e8ddd2] bg-white shadow-[0_24px_70px_rgba(72,25,35,0.16)] lg:grid-cols-[0.95fr_1.05fr]">
          
          {/* LEFT SIDE - DESKTOP ONLY */}
          <section className="relative hidden overflow-hidden bg-gradient-to-br from-[#6f1027] via-[#8f1731] to-[#5b0c20] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">
            
            {/* Background decorations */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#e5b83f]/25" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#e5b83f]/15" />

            <div className="pointer-events-none absolute right-12 top-1/2 h-32 w-32 -translate-y-1/2 rotate-45 border border-[#e5b83f]/10" />

            {/* Logo */}
            <div className="relative">
              <BankLogo light />
            </div>

            {/* Main Content */}
            <div className="relative max-w-lg">
              <div className="mb-5 h-1 w-16 rounded-full bg-[#e5b83f]" />

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#f2d98a]">
                Secure Digital Banking
              </p>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight xl:text-5xl">
                Banking that puts
                <br />
                security first.
              </h1>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
                Manage your accounts, view transactions, and access your
                banking information securely.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#e5b83f]" />
                Secure Banking Services
              </div>
            </div>

            {/* Bottom Text */}
            <div className="relative flex items-center gap-3 text-xs text-white/55">
              <span className="h-px w-10 bg-[#e5b83f]/50" />
              Trusted digital access
            </div>
          </section>

          {/* RIGHT SIDE - LOGIN FORM */}
          <section className="bg-white p-6 sm:p-10 lg:p-12 xl:p-14">
            
            {/* Mobile Logo */}
            <div className="mb-5 lg:hidden">
              <BankLogo />
            </div>

            {/* Welcome Section */}
            <div className="mb-6">
              <p className="mb-2 text-sm font-bold text-[#8f1731]">
                Welcome Back
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#24151a] sm:text-4xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your Customer ID and Password to continue.
              </p>
            </div>

            {/* Login Form */}
            <LoginForm />
          </section>

        </div>
      </div>
    </main>
  );
}