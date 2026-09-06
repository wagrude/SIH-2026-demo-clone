
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";

export default function BankingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-100 transition-colors duration-300 dark:bg-slate-950">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1 bg-slate-100 p-4 transition-colors duration-300 dark:bg-slate-950 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
