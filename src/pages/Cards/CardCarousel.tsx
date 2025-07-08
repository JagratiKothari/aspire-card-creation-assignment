import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FreezeCardIcon from '../../assets/FreezeCard.svg';
import SetSpendLimitIcon from '../../assets/SetSpendLimit.svg';
import GPayIcon from '../../assets/GPay.svg';
import ReplaceCardIcon from '../../assets/ReplaceCard.svg';
import DeleteIcon from '@mui/icons-material/Delete'; // Placeholder for Cancel card
import type { Card } from '../../types';
import { CardItem } from './CardItem';

interface Props {
  cards: Card[];
  selectedIndex: number;
  onSlideChange: (index: number) => void;
  onToggleFreeze: () => void;
}

export const CardCarousel: React.FC<Props> = ({
  cards,
  selectedIndex,
  onSlideChange,
  onToggleFreeze
}) => {
  const [showCardNumber, setShowCardNumber] = useState(false);

  const selectedCard = cards[selectedIndex];

  // Action buttons data
  const actions = [
    {
      label: selectedCard?.isFrozen ? 'Unfreeze card' : 'Freeze card',
      icon: <img src={FreezeCardIcon} alt="Freeze card" style={{ width: 24, height: 24 }} />,
      onClick: onToggleFreeze,
      disabled: false,
    },
    {
      label: 'Set spend limit',
      icon: <img src={SetSpendLimitIcon} alt="Set spend limit" style={{ width: 24, height: 24 }} />,
      onClick: () => {},
      disabled: selectedCard?.isFrozen,
    },
    {
      label: 'Add to GPay',
      icon: <img src={GPayIcon} alt="Add to GPay" style={{ width: 24, height: 24 }} />,
      onClick: () => {},
      disabled: selectedCard?.isFrozen,
    },
    {
      label: 'Replace card',
      icon: <img src={ReplaceCardIcon} alt="Replace card" style={{ width: 24, height: 24 }} />,
      onClick: () => {},
      disabled: selectedCard?.isFrozen,
    },
    {
      label: 'Cancel card',
      icon: <DeleteIcon sx={{ color: '#325BAF' }} fontSize="small" />,
      onClick: () => {},
      disabled: selectedCard?.isFrozen,
    },
  ];

  return (
    <Box maxWidth={420} mx="auto" display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
      {/* Show card number toggle */}
      <Box width="100%" display="flex" justifyContent="flex-end" alignItems="center" mb={1}>
        <Button
          onClick={() => setShowCardNumber((prev) => !prev)}
          startIcon={<RemoveRedEyeIcon sx={{ color: '#01D167' }} />}
          sx={{
            color: '#01D167',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: 14,
            background: 'transparent',
            boxShadow: 'none',
            '&:hover': { background: 'transparent', color: '#01D167' },
            minWidth: 0,
            p: 0,
          }}
        >
          {showCardNumber ? 'Hide card number' : 'Show card number'}
        </Button>
      </Box>
      {/* Card display */}
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={220}
        mb={1}
      >
        {cards && cards.length > 0 ? (
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              borderRadius: 4,
              background: '#01D167',
              p: 0,
              overflow: 'visible',
              minHeight: 180,
              display: 'flex',
            }}
          >
            {/* CardItem should render the card content, pass showNumber or showCardNumber as needed */}
            <CardItem card={cards[selectedIndex]} showNumber={showCardNumber} />
          </Paper>
        ) : (
          <div>No cards available</div>
        )}
      </Box>
      {/* Dots navigation styled like slick-carousel */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={0.5} mb={2}>
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSlideChange(idx)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              margin: '0 2px',
              cursor: 'pointer',
              outline: 'none',
            }}
            aria-label={`Go to card ${idx + 1}`}
          >
            <span
              style={{
                display: 'block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: idx === selectedIndex ? '#01D167' : '#D3F3E2',
                transition: 'background 0.2s',
              }}
            />
          </button>
        ))}
      </Box>
      {/* Action buttons below card */}
      <Box
        width="100%"
        maxWidth={340}
        bgcolor="#F5F9FF"
        borderRadius={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        py={1.5}
        mt={1}
        boxShadow={0}
      >
        {actions.map((action) => (
          <Box
            key={action.label}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              opacity: action.disabled ? 0.4 : 1,
              pointerEvents: action.disabled ? 'none' : 'auto',
              cursor: action.disabled ? 'not-allowed' : 'pointer',
            }}
            onClick={!action.disabled ? action.onClick : undefined}
          >
            {action.icon}
            <Typography variant="caption" sx={{ color: '#425166', fontWeight: 500, fontSize: 12, mt: 0.5, textAlign: 'center' }}>
              {action.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
