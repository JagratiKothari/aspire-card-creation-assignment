import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TransactionItem from '../TransactionItem';
import type { Transaction } from '../../../types';


describe('TransactionItem', () => {
  it('renders merchant, amount, date, and description correctly for a credit', () => {
    const transaction: Transaction = {
      id: '1',
      cardId: '1',
      merchant: 'Test Merchant',
      amount: 100,
      currency: 'S$',
      title: 'Refund on debit card',
      type: 'credit',
      date: '2023-01-01',
      description: 'Refund on debit card',
      category: 'refund',
      direction: 'in',
    };
    render(<TransactionItem transaction={transaction} />);
    expect(screen.getByText('Test Merchant')).toBeInTheDocument();
    expect(screen.getByText('+ S$ 100')).toBeInTheDocument();
    expect(screen.getByText('01 Jan 2023')).toBeInTheDocument();
    expect(screen.getByText('Refund on debit card')).toBeInTheDocument();
  });

  it('renders merchant, amount, date, and description correctly for a debit', () => {
    const transaction: Transaction = {
      id: '2',
      cardId: '1',
      merchant: 'Coffee Shop',
      amount: 50,
      currency: 'S$',
      title: 'Coffee',
      type: 'debit',
      date: '2023-02-01',
      description: 'Morning coffee',
      category: 'shopping',
      direction: 'out',
    };
    render(<TransactionItem transaction={transaction} />);
    expect(screen.getByText('Coffee Shop')).toBeInTheDocument();
    expect(screen.getByText('- S$ 50')).toBeInTheDocument();
    expect(screen.getByText('01 Feb 2023')).toBeInTheDocument();
    expect(screen.getByText('Morning coffee')).toBeInTheDocument();
  });
}); 