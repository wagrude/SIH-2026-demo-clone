import BankingLayout from "@/components/navigation/BankingLayout";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BankingLayout>{children}</BankingLayout>;
}
