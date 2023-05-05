import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
    display: grid;
    height: 100%;
    overflow-x: hidden;
    background-color: #faffff;
  }
  #root{
    width: 100vw;
  }
`;
export const TituloColorido = styled.p`
  color: #00f3ff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
