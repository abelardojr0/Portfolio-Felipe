import styled from "styled-components";

export const CardComponent = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;
export const CardTitulo = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  word-spacing: 5px;
  letter-spacing: 3px;
  margin-bottom: 40px;
  font-weight: bold;
`;
export const CardImagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;

  ${CardComponent}:hover & {
    opacity: 1;
  }
`;

export const CardOverlayTitulo = styled.h2`
  color: white;
  font-size: 2.2rem;
  text-align: center;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 20px;
`;
export const CardOverlaySubtitulo = styled.h2`
  color: #888897;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
