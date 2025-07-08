import React, { useState } from 'react';
import styled from 'styled-components';
import { AddNewCardModal } from './AddNewCardModal'; // Create separately or inline

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 8px 0;
  flex-wrap: wrap;
`;

const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #444;
`;

const CurrencyTag = styled.div`
  background-color: #01D167;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 6px;
`;

const Amount = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #222;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #0050C8;
  color: white;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 80, 200, 0.08);
`;

const Input = styled.input`
  margin-top: 16px;
  padding: 12px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #0050c8;
    box-shadow: 0 0 0 2px rgba(0, 80, 200, 0.2);
  }
`;

const PlusIcon = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

interface CardsHeaderProps {
  onAddCard: (cardName: string) => void;
}

export const CardsHeader: React.FC<CardsHeaderProps> = ({ onAddCard }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cardName, setCardName] = useState('');

  const handleAddCard = () => {
    if (cardName.trim()) {
      onAddCard(cardName);
      setCardName('');
      setModalOpen(false);
    }
  };

  return (
    <>
      <HeaderContainer>
        <BalanceWrapper>
          <div>
            <Label>Available balance</Label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 4 }}>
              <CurrencyTag>S$</CurrencyTag>
              <Amount>3,000</Amount>
            </div>
          </div>
        </BalanceWrapper>

        <Button onClick={() => setModalOpen(true)}>
          <PlusIcon>＋</PlusIcon> New card
        </Button>
      </HeaderContainer>

      {modalOpen && (
        <AddNewCardModal
          title="Add New Card"
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddCard}
        >
          <Input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Enter card name"
          />
        </AddNewCardModal>
      )}
    </>
  );
};
