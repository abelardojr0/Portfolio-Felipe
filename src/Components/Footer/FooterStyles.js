import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const FooterComponent = styled.section`
  background-color: #151515;
  height: 100vh;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 80px;
  ${responsivo(breakpoints.mobile)} {
    justify-content: space-between;
  }
`;
export const FooterTitulo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 15px;
  color: white;
  margin-bottom: 20px;
`;

export const FooterTexto = styled.p`
  color: #888897;
  font-size: 1.2rem;
  line-height: 1.3;
  max-width: 600px;
  font-family: "Domine", serif;
  text-align: center;
`;

export const FooterSociais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-top: 50px;
`;

export const FooterBotaoEmail = styled.button`
  width: 500px;
  background-color: #00f3ff;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  margin-top: 40px;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #151515;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 350px;
  }
  ${responsivo(breakpoints.mobile)} {
    width: 250px;
  }
`;

export const FooterDetalhes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
`;

export const FooterDetalhesTexto = styled.p`
  color: #888897;
  font-size: 0.8rem;
`;
export const FooterDetalhesDestaque = styled.span`
  color: white;
`;
