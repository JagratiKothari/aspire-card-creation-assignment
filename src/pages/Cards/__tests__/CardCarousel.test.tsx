// jest test file for CardCarousel
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardCarousel } from '../CardCarousel';

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

describe('CardCarousel', () => {
  it('renders card and toggles freeze', () => {
    const onSlideChange = jest.fn();
    const onToggleFreeze = jest.fn();
    render(
      <CardCarousel
        cards={cards}
        selectedIndex={0}
        onSlideChange={onSlideChange}
        onToggleFreeze={onToggleFreeze}
      />
    );
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Freeze card/i));
    expect(onToggleFreeze).toHaveBeenCalled();
  });
}); 