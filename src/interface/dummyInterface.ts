export interface TransactionInterface {
  id: string;
  iconType?: string;
  name?: string;
  category?: string;
  icon: string;
  iconBg?: string;
  amount: string;
  date: string;
  time: string;
}

export interface HistoryInterface {
  id: string;
  category: string;
  icon: string;
  iconBg: string;
  amount: string;
  date: string;
  time: string;
}
