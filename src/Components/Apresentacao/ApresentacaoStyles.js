import styled, { keyframes } from "styled-components";
import background from "../../Images/background.jpg";
import responsivo, { breakpoints } from "../../Responsivo";

export const ApresentacaoComponent = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ApresentacaoConteudo = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ConteudoBemVindo = styled.p`
  color: #00f3ff;
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 15px;
  ${responsivo(breakpoints.tablet)} {
    font-size: 1.3rem;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 1rem;
    padding-top: 80px;
    margin-bottom: 40px;
  }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white }
`;

export const ConteudoEuSou = styled.h1`
  color: white;
  font-size: 6rem;
  font-weight: bold;
  font-family: "Prompt", sans-serif;
  ${responsivo(breakpoints.tablet)} {
    font-size: 3.5rem;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 2.8rem;
  }
`;
export const ConteudoNome = styled.h1`
  color: white;
  font-size: 6rem;
  font-weight: bold;
  font-family: "Prompt", sans-serif;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 3.5s steps(40, end),
    ${blinkCaret} 0.75s step-end infinite;
  border-right: 0.15em solid white;
  text-align: center;
  ${responsivo(breakpoints.tablet)} {
    font-size: 3.5rem;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 2.8rem;
  }
`;

export const ConteudoAreas = styled.ul`
  color: white;
  font-family: "Castoro Titling", cursive;
  margin-top: 40px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  ${responsivo(breakpoints.tablet)} {
    font-size: 1rem;
  }
  ${responsivo(breakpoints.mobile)} {
    flex-direction: column;
  }
  li {
    position: relative;
    &:first-child::after,
    &:last-child::after {
      content: "";
      width: 2px;
      height: 20px;
      background-color: white;
      display: inline-block;
      position: absolute;
      top: -2px;
      left: -10px;
    }
    &:first-child::before,
    &:last-child::before {
      content: "";
      width: 2px;
      height: 20px;
      background-color: white;
      display: inline-block;
      position: absolute;
      top: -2px;
      right: -10px;
    }
    ${responsivo(breakpoints.mobile)} {
      &:nth-child(2)::after {
        content: "";
        width: 2px;
        height: 20px;
        background-color: white;
        display: inline-block;
        position: absolute;
        top: -2px;
        left: -10px;
      }
      &:nth-child(2)::before {
        content: "";
        width: 2px;
        height: 20px;
        background-color: white;
        display: inline-block;
        position: absolute;
        top: -2px;
        right: -10px;
      }
    }
  }
`;
export const ConteudoBotaoSobre = styled.button`
  padding: 1.2rem 2rem;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-weight: bold;
  border: 4px solid rgb(73, 73, 73);
  text-transform: uppercase;
  background-color: transparent;
  margin-top: 40px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: #00f3ff;
  }
`;

export const ConteudoSociais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-top: 100px;
`;
