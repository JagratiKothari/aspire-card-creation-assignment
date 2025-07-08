import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardItem } from '../CardItem';

const card = {
  id: '1',
  name: 'Test Card',
  numberMasked: '•••• •••• •••• 1234',
  numberUnmasked: '1234 5678 9012 1234',
  cvvUnmasked: '123',
  expiry: '12/30',
  cvvMasked: '***',
  vendor: 'VISA' as 'VISA',
  isFrozen: false,
};

describe('CardItem', () => {
  it('renders cardholder name and masked/unmasked number', () => {
    render(<CardItem card={card} showNumber={false} />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText(card.numberMasked)).toBeInTheDocument();
    render(<CardItem card={card} showNumber={true} />);
    expect(screen.getByText(card.numberUnmasked)).toBeInTheDocument();
  });
}); 