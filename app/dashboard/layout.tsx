import BankingLayout from "@/components/navigation/BankingLayout";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BankingLayout>{children}</BankingLayout>;
}