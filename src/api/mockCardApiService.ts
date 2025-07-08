import type { Card, Transaction } from '../types';

export const fetchCards = (): Promise<Card[]> => {
  return Promise.resolve([
    {
      id: '1',
      name: 'Jagrati Amex Card',
      numberMasked: '•••• •••• •••• 2020',
      numberUnmasked: '4235 6345 7836 2020',
      cvvUnmasked: '748',
      expiry: '11/25',
      cvvMasked: '***',
      vendor: 'VISA',
      isFrozen: false,
    },
    {
      id: '2',
      name: 'Jagrati HDFC Card ',
      numberMasked: '•••• •••• •••• 8392',
      numberUnmasked: '4235 6345 7836 8392',
      cvvUnmasked: '823',
      expiry: '12/30',
      cvvMasked: '***',
      vendor: 'VISA',
      isFrozen: true,
    },
  ]);
};

export const fetchTransactions = (): Promise<Transaction[]> => {
  return Promise.resolve([
    {
      id: '1',
      cardId: '1',
      merchant: 'Amazon',
      amount: 100,
      currency: 'S$',
      date: '2023-01-01',
      type: 'credit',
      description: 'Refund',
      icon: 'some-icon.svg',
      title: 'Amazon Refund',
      category: 'refund',
      direction: 'in',
    },
    {
      id: '2',
      cardId: '1',
      merchant: 'Starbucks',
      amount: 20,
      currency: 'S$',
      date: '2023-01-02',
      type: 'debit',
      description: 'Coffee',
      icon: 'some-icon.svg',
      title: 'Starbucks Coffee',
      category: 'shopping',
      direction: 'out',
    },
    {
      id: 't3',
      cardId: '2',
      merchant: 'Hamleys',
      amount: 150,
      currency: 'S$',
      date: '2023-01-03',
      type: 'debit',
      description: 'Charged to debit card',
      icon: 'speaker',
      title: 'Hamleys Purchase',
      category: 'shopping',
      direction: 'out',
    },
  ]);
};
