import styled from "styled-components";

import fundo from "../../Images/background2.png";

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
`;

export const ServicoTexto = styled.p`
  color: #888897;
  font-size: 1.2rem;
  line-height: 1.3;
  max-width: 600px;
  font-family: "Domine", serif;
  text-align: center;
`;
export const ServicosCarousel = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 100px;
`;
export const ServicoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-left: 30px;
  margin-right: 30px;
`;
export const ServicoCardTitulo = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 15px;
  color: white;
  margin-bottom: 20px;
`;

export const ServicoCardTexto = styled.p`
  color: #888897;
  font-size: 1rem;
  line-height: 2;
  max-width: 600px;
  font-family: "Domine", serif;
  text-align: center;
  letter-spacing: 2px;
`;

export const ServicoFaixa = styled.div`
  width: 100%;
  height: 250px;
  background-color: #00f3ff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
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
`;
export const ServicoFaixaTexto = styled.p`
  color: #606060;
  font-size: 1rem;
  line-height: 1.3;
  max-width: 600px;
  text-align: center;
  text-transform: uppercase;
  max-width: 180px;
`;
