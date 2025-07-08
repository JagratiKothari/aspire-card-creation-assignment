import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardsHeader } from '../CardsHeader';

describe('CardsHeader', () => {
  it('renders balance and add card button, opens modal', () => {
    const onAddCard = jest.fn();
    render(<CardsHeader onAddCard={onAddCard} />);
    expect(screen.getByText(/Available balance/i)).toBeInTheDocument();
    expect(screen.getByText(/New card/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/New card/i));
    expect(screen.getByPlaceholderText(/Enter card name/i)).toBeInTheDocument();
  });
}); 