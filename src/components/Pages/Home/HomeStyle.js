import styled from "styled-components";
import { Link } from "react-router-dom";
export const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

export const MovieItem = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  h2 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const NavLinkBlock = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;