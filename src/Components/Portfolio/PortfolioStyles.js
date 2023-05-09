import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

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
  ${responsivo(breakpoints.tablet)} {
    font-size: 2.2rem;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
  }
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
  ${responsivo(breakpoints.tablet)} {
    max-width: 450px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
`;

export const PortfolioCarousel = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  ${responsivo(breakpoints.desktop)} {
    max-width: 700px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 450px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
`;
