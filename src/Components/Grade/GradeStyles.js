import styled from "styled-components";

export const GradeComponent = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
`;
export const GradeLadoEsquerdo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`;
export const GradeLadoDireito = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column;
  padding-top: 20px;
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
  }
`;
export const GradeCentroImagem = styled.img`
  max-width: 30px;
  border-radius: 50%;
  padding: 0.5rem;
  object-fit: cover;
  background-color: #313131;
  z-index: 10;
  overflow: hidden;
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
  width: 600px;
  margin-bottom: 100px;
`;
