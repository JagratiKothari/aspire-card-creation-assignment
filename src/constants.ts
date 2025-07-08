import type { CardTab } from './types';

export const INITIAL_DATA = [
    {
        cardName: 'HDFC Millenia Card',
        expiryDate: '03/2030',
        cvv: '737',
        cardNumber: '3146567867883421'
    },
    {
        cardName: 'HDFC Diners Club Card',
        expiryDate: '03/2030',
        cvv: '737',
        cardNumber: '3146567867883421'
    },
    {
        cardName: 'HDFC Tata Neu Infinity Card',
        expiryDate: '03/2030',
        cvv: '737',
        cardNumber: '3146567867883421'
    },
    {
        cardName: 'HDFC Gold Card',
        expiryDate: '03/2030',
        cvv: '737',
        cardNumber: '3146567867883421'
    },
    {
        cardName: 'HDFC Infinia Card',
        expiryDate: '03/2030',
        cvv: '737',
        cardNumber: '3146567867883421'
    },
];

export const CARD_TABS: CardTab[] = [
  { key: 'MY_DEBIT_CARDS', label: 'My debit cards' },
  { key: 'COMPANY_CARDS', label: 'All company cards' },
];