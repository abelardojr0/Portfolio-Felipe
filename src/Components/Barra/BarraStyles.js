import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const BarraEstrutura = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
export const BarraTitulo = styled.h2`
  font-size: 1.5rem;
  color: #313131;
  margin-bottom: 20px;
  text-align: start;
  margin-left: 30px;
`;
export const BarraFundo = styled.div`
  height: 5px;
  width: 350px;
  max-width: 80%;
  background-color: #888897;
  position: relative;
  align-self: center;
  ${responsivo(breakpoints.desktop)} {
    width: 250px;
  }
`;
export const BarraFrente = styled.div`
  height: 5px;
  background-color: #313131;
  z-index: 3;
`;
export const BarraNivel = styled.div`
  background-color: #313131;
  color: white;
  position: absolute;
  top: -40px;
  padding: 0.4rem 0.8rem;
  width: 60px;
  border-radius: 10px;
  text-align: center;
  font-size: 0.8rem;
  &::after {
    content: "";
    position: absolute;
    bottom: -8px; /* ajusta a posição da seta */
    left: 60%;
    margin-left: -10px; /* ajusta a posição da seta */
    border-width: 8px 5px 0px 5px; /* cria o triângulo */
    border-style: solid;
    border-color: #313131 transparent transparent transparent; /* cor da seta */
  }
`;
