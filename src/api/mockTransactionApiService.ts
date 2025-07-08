// src/api/mockTransactionApiService.ts
import type { Transaction } from '../types';

export const fetchTransactions = async (cardId: string): Promise<Transaction[]> => {
  // Mock data
  const mockTransactions: Record<string, Transaction[]> = {
    '1': [
      {
        id: 'txn-1',
        cardId: '1',
        title: 'Indigo Flight',
        date: '20 May 2020',
        amount: 150,
        type: 'refund',
        direction: 'in',
        description: 'Refund on debit card',
        category: 'travel',
        merchant: 'Indigo',
        currency: '$',
      },
      {
        id: 'txn-2',
        cardId: '1',
        title: 'Hamleys',
        date: '20 May 2020',
        amount: 150,
        type: 'charge',
        direction: 'out',
        description: 'Charged to debit card',
        category: 'shopping',
        merchant: 'Indigo',
        currency: '$',
      },
    ],
    '2': [
      {
        id: 'txn-3',
        cardId: '2',
        title: 'Spotify',
        date: '10 Apr 2020',
        amount: 99,
        type: 'charge',
        direction: 'out',
        description: 'Subscription fee',
        category: 'entertainment',
        merchant: 'Indigo',
        currency: '$',
      },
    ],
  };

  return new Promise((resolve) =>
    setTimeout(() => resolve(mockTransactions[cardId] || []), 300)
  );
};
