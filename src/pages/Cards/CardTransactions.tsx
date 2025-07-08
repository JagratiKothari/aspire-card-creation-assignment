// src/components/CardTransactions.tsx
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  CircularProgress
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchTransactions } from '../../api/mockTransactionApiService';
import type { Transaction } from '../../types';
import TransactionItem from './TransactionItem';
import TransactionIcon from '../../assets/Transaction.svg';

interface Props {
  cardId: string;
}

export const Transactions: React.FC<Props> = ({ cardId }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cardId) return;
    setLoading(true);
    fetchTransactions(cardId)
      .then(setTransactions)
      .finally(() => setLoading(false));
  }, [cardId]);

  return (
    <Accordion
      defaultExpanded
      sx={{
        borderRadius: 3,
        background: 'transparent',
        boxShadow: '0 4px 24px 0 rgba(44, 62, 80, 0.08)',
        border: 'none',
        mt: 2,
        overflow: 'visible',
      }}
      disableGutters
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: '#0C365A' }} />}
        sx={{
          background: '#F5FBFF',
          borderRadius: 3,
          minHeight: 56,
          border: '1px solid #E6EBF1',
          px: 2,
          py: 0,
          '& .MuiAccordionSummary-content': {
            margin: 0,
            alignItems: 'center',
          },
        }}
      >
        <Typography fontWeight={700} fontSize={16} color="#0C365A">
          <Box component="span" display="flex" alignItems="center" gap={1}>
            <img src={TransactionIcon} alt="transaction_icon" style={{ height: 20, width: 20, marginRight: 8 }} />
            Recent transactions
          </Box>
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ px: 2, background: 'white', borderRadius: 3, py: 2 }}>
        {loading ? (
          <Box display="flex" justifyContent="center" py={3}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {transactions.map((txn) => (
              <TransactionItem key={txn.id} transaction={txn} />
            ))}
            <Box
              mt={2}
              p={1.5}
              borderRadius={2}
              textAlign="center"
              bgcolor="#DDFFEC"
              sx={{
                cursor: 'pointer',
                maxWidth: 260,
                mx: 'auto',
                fontWeight: 700,
                color: '#01D167',
                fontSize: 15,
                letterSpacing: 0.2,
                transition: 'background 0.2s',
                '&:hover': { background: '#B8F5D6' },
              }}
            >
              <Typography color="#01D167" fontWeight={700} fontSize={15}>
                View all card transactions
              </Typography>
            </Box>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
