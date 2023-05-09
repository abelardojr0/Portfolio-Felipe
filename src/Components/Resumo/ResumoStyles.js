import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const ResumoComponent = styled.section`
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  ${responsivo(breakpoints.mobile)} {
    padding-top: 0px;
  }
`;

export const ResumoTitulo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 15px;
  color: #313131;
  margin-bottom: 20px;
  ${responsivo(breakpoints.mobile)} {
    font-size: 2rem;
  }
`;

export const ResumoTexto = styled.p`
  color: #888897;
  font-size: 1.2rem;
  line-height: 1.3;
  max-width: 600px;
  font-family: "Domine", serif;
  text-align: center;
  ${responsivo(breakpoints.tablet)} {
    max-width: 450px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
`;

export const ResumoTituloColorido = styled.p`
  color: #00f3ff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  ${responsivo(breakpoints.tablet)} {
    max-width: 450px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
    text-align: center;
  }
`;

//CAROUSEL

export const ResumoCarousel = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  ${responsivo(breakpoints.desktop)} {
    max-width: 700px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 480px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
`;
