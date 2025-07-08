import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardDetails } from '../CardDetails';

describe('CardDetails', () => {
  it('renders the accordion with icon and title', () => {
    render(<CardDetails />);
    expect(screen.getByText(/Card details/i)).toBeInTheDocument();
    expect(screen.getByAltText(/card_details_icon/i)).toBeInTheDocument();
  });
}); 