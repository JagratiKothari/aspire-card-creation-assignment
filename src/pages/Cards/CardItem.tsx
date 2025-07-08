import React from 'react';
import { Box, Typography } from '@mui/material';
import AspireSecondaryLogo from '../../assets/AspireSecondaryLogo.svg';
import VisaLogo from '../../assets/Visa Logo.svg';
import type { Card } from '../../types';

export const CardItem: React.FC<{ card: Card; showNumber: boolean }> = ({ card, showNumber }) => {
  return (
    <Box
      sx={{
        bgcolor: '#01D167',
        color: 'white',
        borderRadius: '24px',
        p: { xs: 3, sm: 4 },
        width: '414px',
        height: '248.85px',
        mx: 'auto',
        boxShadow: '0 8px 32px rgba(1, 209, 103, 0.10)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top row: logo */}
      <Box display="flex" justifyContent="flex-end" alignItems="center" mb={2}>
        <img src={AspireSecondaryLogo} alt="aspire-logo" width="84" height="24" />
      </Box>

      {/* Cardholder name */}
      <Typography fontWeight={700} fontSize={24} mb={2} mt={1}>
        {card.name}
      </Typography>

      {/* Card number and last 4 digits */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box flex={1} display="flex">
          <Typography fontSize={14} letterSpacing={6} fontWeight={500} sx={{ wordSpacing: 8 }}>
            {showNumber ? card.numberUnmasked : card.numberMasked}
          </Typography>
        </Box>
        <Typography fontSize={20} fontWeight={600} ml={2}>
          {/* The last 4 digits are already included in the masked/unmasked number from the API */}
        </Typography>
      </Box>

      {/* Bottom row: expiry, cvv, visa */}
      <Box display="flex" alignItems="flex-end" justifyContent="space-between" mt={2}>
        <Box>
          <Typography fontSize={13} fontWeight={600} display="inline" mr={3}>
            Thru: {card.expiry}
          </Typography>
          <Typography fontSize={13} fontWeight={600} display="inline">
            CVV: <span style={{ fontSize: 15 }}>{showNumber ? card.cvvUnmasked : '***'}</span>
          </Typography>
        </Box>
      </Box>
    {card.vendor === 'VISA' && (
      <Box display="flex" justifyContent="flex-end" alignItems="center">
      <img src={VisaLogo} alt="visa" style={{ height: 22, marginLeft: 12, marginBottom:10 }} />
      </Box>
    )}
        </Box>
  );
};
