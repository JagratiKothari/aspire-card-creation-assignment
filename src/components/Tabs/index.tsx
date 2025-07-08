import React from 'react';
import { CARD_TABS } from '../../constants';
import { TabsContainer, TabItem } from './styled';

interface CardsTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CardsTabs: React.FC<CardsTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <TabsContainer>
      {CARD_TABS.map((tab) => (
        <TabItem
          key={tab.key}
          active={activeTab === tab.key}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabsContainer>
  );
};

export default CardsTabs;
