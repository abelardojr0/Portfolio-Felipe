import styled from "styled-components";

export const PorfolioComponent = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;
export const PortfolioTitulo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 15px;
  color: #313131;
  margin-bottom: 20px;
`;

export const PortfolioTexto = styled.p`
  color: #888897;
  font-size: 1.5rem;
  line-height: 1.3;
  max-width: 700px;
  font-family: "Domine", serif;
  margin-bottom: 60px;
  text-align: center;
  word-spacing: 4px;
`;

export const PortfolioCarousel = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
