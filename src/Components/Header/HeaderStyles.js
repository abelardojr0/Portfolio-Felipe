import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const HeaderComponent = styled.header`
  width: 100%;
  max-width: 100vw;
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
  ${responsivo(breakpoints.mobile)} {
    margin-right: 0px;
  }
`;
export const HeaderLista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: white;
  font-size: 1.2rem;
  ${responsivo(breakpoints.desktop)} {
    font-size: 1rem;
  }
  ${responsivo(breakpoints.tablet)} {
    display: none;
  }
  ${responsivo(breakpoints.mobile)} {
    display: none;
  }
  li {
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: #00f3ff;
    }
  }
`;
