import React from "react";
import { Outlet } from 'react-router-dom';
import { SideBar } from "../SideBar";

import { LayoutContainer, RightSideContainer } from "./styled";

export const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <div>
        <SideBar />
      </div>
      <RightSideContainer><Outlet /></RightSideContainer>
    </LayoutContainer>
  );
};
