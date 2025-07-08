// src/pages/Cards/index.tsx

import React, { useEffect, useState } from 'react';
import CardsTabs from '../../components/Tabs';
import { CardsHeader } from './CardsHeader';
import { CardDisplay } from './CardDisplay';
import { fetchCards } from '../../api/mockCardApiService';
import { generateCard } from '../../utils';
import type { Card } from '../../types';

export const Cards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [activeTab, setActiveTab] = useState<string>('MY_DEBIT_CARDS');

  useEffect(() => {
    fetchCards().then(setCards);
  }, []);

  const handleAddCard = (name: string) => {
    const newCard = generateCard(name.trim());
    setCards((prev) => [...prev, newCard]);
  };

  const handleToggleFreeze = (index: number) => {
    setCards((prev) => prev.map((card, i) =>
      i === index ? { ...card, isFrozen: !card.isFrozen } : card
    ));
  };

  return (
    <div>
      <CardsHeader onAddCard={handleAddCard} />
      <CardsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'MY_DEBIT_CARDS' && (
        <CardDisplay cards={cards} onToggleFreeze={handleToggleFreeze} />
      )}
      {activeTab === 'COMPANY_CARDS' && (
        <div style={{ padding: 32, textAlign: 'center', color: '#888' }}>
          All company cards coming soon.
        </div>
      )}
    </div>
  );
};
