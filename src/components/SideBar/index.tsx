import React from "react";

import AspireMainLogo from "../../assets/AspireMainLogo.svg";
import HomeIcon from "../../assets/Logo-1.svg";
import CardIcon from "../../assets/pay.svg";
import PaymentIcon from "../../assets/Payments.svg";
import CreditIcon from "../../assets/Credit.svg";
import SettingsIcon from "../../assets/user.svg";

import { SideBarContainer, List, StyledLink as Link } from "./styled";

export const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <img src={AspireMainLogo} alt="logo" />
      <p>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
      <nav>
        <List>
          <Link to="/home">
            <img src={HomeIcon} alt="home-logo" />
            <div>Home</div>
          </Link>
          <Link to="/cards">
            <img src={CardIcon} alt="home-logo" />
            <div>Cards</div>
          </Link>
          <Link to="/payments">
            <img src={PaymentIcon} alt="home-logo" />
            <div>Payments</div>
          </Link>
          <Link to="/credit">
            <img src={CreditIcon} alt="home-logo" />
            <div>Credit</div>
          </Link>
          <Link to="/settings">
            <img src={SettingsIcon} alt="home-logo" />
            <div>Settings</div>
          </Link>
        </List>
      </nav>
    </SideBarContainer>
  );
};
