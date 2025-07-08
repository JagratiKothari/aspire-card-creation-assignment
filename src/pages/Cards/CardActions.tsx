import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import type { Card } from '../../types';

interface Props {
  card: Card;
  onUpdateCard: (updatedCard: Card) => void;
}

export const CardActions: React.FC<Props> = ({ card, onUpdateCard }) => {
  const actions = [
    {
      label: card.isFrozen ? 'Unfreeze card' : 'Freeze card',
      emoji: '❄️',
      onClick: () => onUpdateCard({ ...card, isFrozen: !card.isFrozen }),
      alwaysEnabled: true,
    },
    { label: 'Set spend limit', emoji: '🌀' },
    { label: 'Add to GPay', emoji: '🅖' },
    { label: 'Replace card', emoji: '🔁' },
    { label: 'Cancel card', emoji: '🗑️' },
  ];

  return (
    <Paper
      elevation={2}
      sx={{
        mt: 3,
        py: 2,
        px: 1,
        display: 'flex',
        justifyContent: 'space-evenly',
        borderRadius: 4,
        backgroundColor: '#F5FBFF',
        maxWidth: 800,
        mx: 'auto',
        flexWrap: 'wrap',
      }}
    >
      {actions.map(({ label, emoji, onClick, alwaysEnabled }) => {
        const isDisabled = card.isFrozen && !alwaysEnabled;
        return (
          <Box
            key={label}
            textAlign="center"
            width={80}
            m={1}
            onClick={isDisabled ? undefined : onClick}
            sx={{
              cursor: isDisabled ? 'not-allowed' : onClick ? 'pointer' : 'default',
              opacity: isDisabled ? 0.4 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            <Typography fontSize={28}>{emoji}</Typography>
            <Typography fontSize={13}>{label}</Typography>
          </Box>
        );
      })}
    </Paper>
  );
};
