// src/components/TransactionItem.tsx
import React, { type ReactNode } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import type { Transaction } from '../../types';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FlightIcon from '@mui/icons-material/Flight';
import CampaignIcon from '@mui/icons-material/Campaign';
import UndoIcon from '@mui/icons-material/Undo';

interface Props {
  transaction: Transaction;
}

const categoryIconMap: Record<string, ReactNode> = {
  shopping: <LocalMallIcon />,
  travel: <FlightIcon />,
  entertainment: <CampaignIcon />,
  refund: <UndoIcon />,
  other: <CreditCardIcon />,
};

const bgColorMap: Record<string, string> = {
  shopping: '#E0F3FF',
  travel: '#E6FFF5',
  entertainment: '#FFE6F3',
  refund: '#E6F3FF',
  other: '#E6F0FF',
};

export const TransactionItem: React.FC<Props> = ({ transaction }) => {
  const {
    merchant,
    amount,
    currency,
    type,
    date,
    description,
    category,
  } = transaction;

  const icon = categoryIconMap[category] || categoryIconMap.other;
  const bgColor = bgColorMap[category] || '#E6F0FF';

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py={2.2}
      borderBottom="1.5px solid #F0F0F0"
      px={0.5}
      minHeight={64}
    >
      {/* Left section: icon + merchant + date + subtext */}
      <Box display="flex" alignItems="center">
        <Avatar
          sx={{
            bgcolor: bgColor,
            color: '#333',
            width: 44,
            height: 44,
            mr: 2,
            boxShadow: '0 2px 8px rgba(44, 62, 80, 0.04)',
          }}
        >
          {icon}
        </Avatar>
        <Box>
          <Typography fontWeight={700} fontSize={15} color="#222">
            {merchant}
          </Typography>
          <Typography variant="body2" color="#A0A4A8" fontSize={13} mt={0.2}>
            {new Date(date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </Typography>
          <Box display="flex" alignItems="center" mt={0.5}>
            <CreditCardIcon sx={{ fontSize: 15, color: '#23CEFD', mr: 0.5 }} />
            <Typography
              variant="body2"
              color="#23CEFD"
              fontWeight={600}
              fontSize={13}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right section: amount */}
      <Typography
        fontWeight={700}
        fontSize={15}
        color={type === 'credit' ? '#01D167' : '#222'}
        textAlign="right"
        minWidth={90}
      >
        {type === 'credit' ? '+ ' : '- '}{currency} {Math.abs(amount)}
      </Typography>
    </Box>
  );
};

export default TransactionItem;
