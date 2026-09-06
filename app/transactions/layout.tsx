import BankingLayout from "@/components/navigation/BankingLayout";

export default function TransactionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BankingLayout>{children}</BankingLayout>;
}
