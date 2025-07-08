import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 0 0 0 0;
  width: 100%;
  border-bottom: 1.5px solid #E5E5E5;
  margin-bottom: 12px;
`;

export const TabItem = styled.div<{ active: boolean }>`
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? 600 : 500)};
  color: ${({ active }) => (active ? '#222' : '#A0A4A8')};
  position: relative;
  padding: 16px 0 12px 0;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: ${({ active }) => (active ? '100%' : '0')};
    background-color: #01D167;
    border-radius: 2px;
    transition: width 0.3s ease, background 0.2s;
  }
`;