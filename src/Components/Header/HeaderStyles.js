import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  height: 100px;
  color: white;
  background-color: black;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const HeaderLogo = styled.img`
  max-width: 80px;
  margin-right: 50px;
`;
export const HeaderLista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: white;
  font-size: 1.2rem;
  li {
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: #00f3ff;
    }
  }
`;
