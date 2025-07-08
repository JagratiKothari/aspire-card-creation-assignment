import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const SideBarContainer = styled.aside`
  max-width: 360px;
  height: 100vh;
  overflow: auto;
  background-color: #0c365a;
  padding: 40px;
  position: sticky;
  top: 0;

  p {
    color: #fff;
    opacity: 30%;
    margin-bottom: 56px;
    margin-top: 24px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  > a {
    margin-bottom: 32px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  line-height: 32px;

  div {
    margin-left: 12px;
  }

  &.active {
    color: #01d167;
  }

  &:hover {
    opacity: 80%;
  }
`;