import React from "react";
import { HeaderComponent, HeaderLista, HeaderLogo } from "./HeaderStyles";
import logo from "../../Images/logo.png";
const Header = () => {
  return (
    <>
      <HeaderComponent>
        <HeaderLogo src={logo} alt="logo" />
        <HeaderLista>
          <li>Início</li>
          <li>Sobre</li>
          <li>Resumo</li>
          <li>Portfólio</li>
          <li>Sobre</li>
          <li>Contato</li>
        </HeaderLista>
      </HeaderComponent>
    </>
  );
};

export default Header;
