export interface CardTab {
  key: string;
  label: string;
}

export interface Card {
  id: string;
  name: string;
  numberMasked: string;
  numberUnmasked: string;
  cvvUnmasked: string;
  expiry: string;
  cvvMasked: string;
  vendor: 'VISA' | 'MASTERCARD';
  isFrozen: boolean;
}

// src/types.ts

export interface Transaction {
  id: string;
  cardId: string;
  merchant: string;
  amount: number;
  currency: string;
  title: string;
  type: 'debit' | 'credit' | 'charge' | 'refund';
  date: string; // ISO format
  description: string;
  category: 'shopping' | 'travel' | 'entertainment' | 'refund' | 'other';
  direction: 'in' | 'out';
}
