import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const GradeComponent = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  ${responsivo(breakpoints.mobile)} {
    flex-direction: column;
    gap: 20px;
  }
`;
export const GradeLadoEsquerdo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  ${responsivo(breakpoints.mobile)} {
    align-items: flex-start;
  }
`;
export const GradeLadoDireito = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  ${responsivo(breakpoints.mobile)} {
    align-self: center;
    padding-top: 0px;
  }
`;
export const GradeTituloEsquerda = styled.h2`
  color: black;
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-weight: bold;
`;
export const GradeSubtitulo = styled.span`
  color: #888897;
`;

export const GradeCentro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    width: 2px;
    background-color: #888897;
    height: 300px;
    ${responsivo(breakpoints.mobile)} {
      width: 300px;
      height: 2px;
      left: 0;
      top: 22px;
    }
  }
`;

export const GradeTituloDireita = styled.h2`
  color: #313131;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 40px;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -30px;
    width: 50px;
    height: 5px;
    background-color: #888897;
  }
`;

export const GradeTexto = styled.p`
  color: #888897;
  line-height: 1.3;
  max-width: 600px;
  margin-bottom: 100px;
  ${responsivo(breakpoints.mobile)} {
    max-width: 200px;
  }
`;
