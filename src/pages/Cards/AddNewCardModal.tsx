import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  width: 360px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease-out;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
`;

const Footer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.button<{ variant?: 'primary' | 'cancel' }>`
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${({ variant }) =>
    variant === 'cancel' ? '#f2f2f2' : '#0050c8'};
  color: ${({ variant }) => (variant === 'cancel' ? '#333' : '#fff')};

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'cancel' ? '#e0e0e0' : '#003d9e'};
  }
`;

export const AddNewCardModal: React.FC<{
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  children?: React.ReactNode;
}> = ({ title, onClose, onSubmit, children }) => {
  return (
    <ModalOverlay>
      <ModalBox>
        <Title>{title}</Title>
        {children}
        <Footer>
          <Button variant="cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>Add</Button>
        </Footer>
      </ModalBox>
    </ModalOverlay>
  );
};
