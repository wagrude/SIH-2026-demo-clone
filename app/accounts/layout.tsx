import BankingLayout from "@/components/navigation/BankingLayout";

export default function AccountsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BankingLayout>{children}</BankingLayout>;
}
