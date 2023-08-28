import styled from "styled-components";
import { Link } from "react-router-dom";
export const FilmContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const FilmTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FilmInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const FilmImage = styled.img`
  max-width: 300px;
  border-radius: 8px;
  margin-right: 2rem;
`;

export const FilmDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  p {
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: bold;
  }
`;

export const ButtonLink = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const BackButton = styled(ButtonLink)`
  position: absolute;
  left: 20px;
`;