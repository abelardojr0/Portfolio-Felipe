import styled from "styled-components";

import fundo from "../../Images/background2.png";
import responsivo, { breakpoints } from "../../Responsivo";

export const ServicosComponent = styled.section`
  height: 100vh;
  background-image: url(${fundo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ServicosParaNavegacao = styled.div`
  height: 100px;
  width: 100%;
`;

export const ServicosPelicula = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const ServicoTitulo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 15px;
  color: white;
  margin-bottom: 20px;
  ${responsivo(breakpoints.mobile)} {
    text-align: center;
  }
`;

export const ServicoTexto = styled.p`
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
export const ServicosCarousel = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 100px;
  ${responsivo(breakpoints.desktop)} {
    max-width: 700px;
  }
  ${responsivo(breakpoints.tablet)} {
    margin-top: 20px;
    max-width: 450px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
    margin-top: 10px;
  }
`;
export const ServicoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-left: 30px;
  margin-right: 30px;
  ${responsivo(breakpoints.mobile)} {
    gap: 5px;
  }
`;
export const ServicoCardTitulo = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 15px;
  color: white;
  margin-bottom: 20px;
  ${responsivo(breakpoints.mobile)} {
    text-align: center;
  }
`;

export const ServicoCardTexto = styled.p`
  color: #888897;
  font-size: 1rem;
  line-height: 2;
  max-width: 600px;
  font-family: "Domine", serif;
  text-align: center;
  letter-spacing: 2px;
  ${responsivo(breakpoints.desktop)} {
    line-height: 1.2;
  }
  ${responsivo(breakpoints.mobile)} {
    line-height: 1.1;
    font-size: 0.8rem;
  }
`;

export const ServicoFaixa = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 250px;
  background-color: #00f3ff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  ${responsivo(breakpoints.desktop)} {
    gap: 20px;
  }
  ${responsivo(breakpoints.mobile)} {
    flex-wrap: wrap;
    height: 400px;
  }
`;
export const ServicoFaixaItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  height: 150px;
  position: relative;
  &::after {
    content: "";
    height: 150px;
    width: 2px;
    background-color: black;
    display: block;
    position: absolute;
    top: 0;
    right: -30px;
    ${responsivo(breakpoints.desktop)} {
      right: -10px;
    }
    ${responsivo(breakpoints.mobile)} {
      visibility: hidden;
    }
  }
`;

export const ServicoFaixaItemUltimo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  height: 150px;
`;
export const ServicoFaixaTitulo = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 15px;
  color: black;
  ${responsivo(breakpoints.desktop)} {
    font-size: 1.2rem;
  }
`;
export const ServicoFaixaTexto = styled.p`
  color: #606060;
  font-size: 1rem;
  line-height: 1.3;
  max-width: 600px;
  text-align: center;
  text-transform: uppercase;
  max-width: 180px;
  ${responsivo(breakpoints.desktop)} {
    font-size: 0.7rem;
    max-width: 100px;
  }
`;
