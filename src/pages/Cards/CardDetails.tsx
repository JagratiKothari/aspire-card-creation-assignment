import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardDetailsIcon from '../../assets/CardDetails.svg';

export const CardDetails: React.FC = () => {
  return (
    <Accordion
      defaultExpanded
      sx={{
        mb: 2,
        borderRadius: 3,
        background: 'transparent',
        boxShadow: '0 4px 24px 0 rgba(44, 62, 80, 0.08)',
        border: 'none',
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
        <Typography fontWeight={700} color="#0C365A" fontSize={16}>
          <Box component="span" display="flex" alignItems="center" gap={1}>
            <img src={CardDetailsIcon} alt="card_details_icon" style={{ height: 20, width: 20, marginRight: 8 }} />
            Card details
          </Box>
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          background: 'white',
          borderRadius: 3,
          px: 2,
          py: 2,
        }}
      >
        <Typography variant="body2">
          Linked account, spending limit, cardholder info etc.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
