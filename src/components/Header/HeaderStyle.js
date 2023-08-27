import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  color: #333;
  padding: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const NavLinkBlock = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const PageLink = styled(Link)`
  color: #e91e63;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease-in-out;

  &:hover {
    border-bottom-color: #e91e63;
  }
`;