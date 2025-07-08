import React from 'react';
import { render, screen } from '@testing-library/react';
import { TransactionItem } from '../TransactionItem';

const transaction = {
  id: '1',
  cardId: '1',
  merchant: 'Test Merchant',
  amount: 100,
  currency: 'S$',
  title: 'Test',
  type: 'credit',
  date: '2023-01-01',
  description: 'Refund on debit card',
  category: 'refund' as 'refund',
  direction: 'in' as 'in',
};

describe('TransactionItem', () => {
  it('renders merchant, amount, and description', () => {
    render(<TransactionItem transaction={transaction} />);
    expect(screen.getByText('Test Merchant')).toBeInTheDocument();
    expect(screen.getByText('+ S$ 100')).toBeInTheDocument();
    expect(screen.getByText('Refund on debit card')).toBeInTheDocument();
  });
}); 