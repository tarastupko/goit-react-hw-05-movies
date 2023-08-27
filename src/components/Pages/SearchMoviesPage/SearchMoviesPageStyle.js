import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const SearchForm = styled.form`
  margin-top: 1rem;

  input {
    padding: 0.5rem;
    width: 70%;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
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