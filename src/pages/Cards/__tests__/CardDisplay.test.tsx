import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardDisplay } from '../CardDisplay';

const cards = [
  {
    id: '1',
    name: 'Test Card',
    numberMasked: '•••• •••• •••• 1234',
    numberUnmasked: '1234 5678 9012 1234',
    cvvUnmasked: '123',
    expiry: '12/30',
    cvvMasked: '***',
    vendor: 'VISA' as 'VISA',
    isFrozen: false,
  },
];

describe('CardDisplay', () => {
  it('renders CardCarousel and CardDetails/Transactions', () => {
    render(<CardDisplay cards={cards} onToggleFreeze={() => {}} />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText(/Card details/i)).toBeInTheDocument();
    expect(screen.getByText(/Recent transactions/i)).toBeInTheDocument();
  });
}); 