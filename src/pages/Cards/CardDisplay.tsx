import React, { useState } from 'react';
import { Box } from '@mui/material';
import type { Card } from '../../types';
import { CardCarousel } from './CardCarousel';
import { CardDetails } from './CardDetails';
import { Transactions } from './CardTransactions';

interface CardDisplayProps {
  cards: Card[];
  onToggleFreeze: (index: number) => void;
}

export const CardDisplay: React.FC<CardDisplayProps> = ({ cards, onToggleFreeze }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedCard = cards[selectedIndex];

  return (
    <Box px={4} py={4}>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={4}
        width="100%"
      >
        {/* LEFT: Card display */}
        <Box flex={1} minWidth={0}>
          <CardCarousel
            cards={cards}
            selectedIndex={selectedIndex}
            onSlideChange={setSelectedIndex}
            onToggleFreeze={() => onToggleFreeze(selectedIndex)}
          />
        </Box>
        {/* RIGHT: Card Details + Transactions */}
        <Box flex={1} minWidth={0}>
          {selectedCard && (
            <Box display="flex" flexDirection="column" gap={3}>
              <CardDetails />
              <Transactions cardId={selectedCard.id} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
