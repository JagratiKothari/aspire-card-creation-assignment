import type { Card } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getRandomDigits = (length: number) =>
  Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');

const getRandomExpiry = () => {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(new Date().getFullYear() + Math.floor(Math.random() * 5)).slice(-2);
  return `${month}/${year}`;
};

export const generateCard = (name: string): Card => {
  const cardNumber = `${getRandomDigits(4)} ${getRandomDigits(4)} ${getRandomDigits(4)} ${getRandomDigits(4)}`;
  return {
    id: uuidv4(),
    name,
    numberUnmasked: cardNumber,
    numberMasked: `•••• •••• •••• ${cardNumber.split(' ')[3]}`,
    expiry: getRandomExpiry(),
    cvvUnmasked: getRandomDigits(3),
    cvvMasked: '***',
    vendor: 'VISA',
    isFrozen: false,
  };
};
