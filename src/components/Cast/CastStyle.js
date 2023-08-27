import styled from "styled-components";

export const CastContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CastItem = styled.div`
  flex-basis: 16.66%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const CastImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CastName = styled.span`
  font-size: 14px;
  text-align: center;
`;