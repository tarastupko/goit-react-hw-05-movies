import React from "react";
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Nav, NavLinkBlock, PageLink } from './HeaderStyle';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLinkBlock to="/">Home</NavLinkBlock>
        <PageLink to="/movies">Search Movie</PageLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;