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
      id: 't1',
      merchant: 'Hamleys',
      amount: 150,
      currency: 'S$',
      date: '20 May 2020',
      type: 'credit',
      description: 'Refund on debit card',
      icon: 'package',
    },
    {
      id: 't2',
      merchant: 'Hamleys',
      amount: -150,
      currency: 'S$',
      date: '20 May 2020',
      type: 'debit',
      description: 'Charged to debit card',
      icon: 'airplane',
    },
    {
      id: 't3',
      merchant: 'Hamleys',
      amount: -150,
      currency: 'S$',
      date: '20 May 2020',
      type: 'debit',
      description: 'Charged to debit card',
      icon: 'speaker',
    },
  ]);
};
