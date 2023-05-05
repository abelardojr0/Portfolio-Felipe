import styled, { keyframes } from "styled-components";
import background from "../../Images/background.png";

export const ApresentacaoComponent = styled.section`
  height: 100vh;
  background-image: url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ApresentacaoConteudo = styled.div`
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
`;

export const ConteudoAreas = styled.p`
  color: white;
  font-family: "Castoro Titling", cursive;
  margin-top: 40px;
  font-size: 1.2rem;
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
