export type TransactionType = "Debit" | "Credit";

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  type: TransactionType;
  amount: number;
  balance: number;
}
