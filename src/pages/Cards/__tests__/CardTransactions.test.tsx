import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import * as api from '../../../api/mockTransactionApiService';
import { Transactions } from '../CardTransactions';

const mockTransactions = [
  {
    id: '1',
    cardId: '1',
    merchant: 'Test Merchant',
    amount: 100,
    currency: 'S$',
    title: 'Test',
    type: 'credit' as const,
    date: '2023-01-01',
    description: 'Refund on debit card',
    category: 'refund' as const,
    direction: 'in' as const,
  },
];

describe('CardTransactions', () => {
  it('renders the accordion and transaction list', async () => {
    jest.spyOn(api, 'fetchTransactions').mockResolvedValueOnce(mockTransactions);
    render(<Transactions cardId="1" />);
    expect(screen.getByText(/Recent transactions/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Test Merchant')).toBeInTheDocument());
  });
}); 