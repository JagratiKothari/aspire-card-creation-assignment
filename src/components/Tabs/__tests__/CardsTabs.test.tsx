import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardsTabs from '../index';

describe('CardsTabs', () => {
  it('renders tabs and switches active tab', () => {
    const setActiveTab = jest.fn();
    render(<CardsTabs activeTab="MY_DEBIT_CARDS" setActiveTab={setActiveTab} />);
    expect(screen.getByText(/My debit cards/i)).toBeInTheDocument();
    expect(screen.getByText(/All company cards/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/All company cards/i));
    expect(setActiveTab).toHaveBeenCalledWith('COMPANY_CARDS');
  });
}); 