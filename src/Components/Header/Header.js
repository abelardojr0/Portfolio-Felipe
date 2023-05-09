import React from "react";
import { HeaderComponent, HeaderLista, HeaderLogo } from "./HeaderStyles";
import logo from "../../Images/logo.png";
import MenuHamburguer from "./MenuHamburguer";
const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setMenuMobile(true);
    }
  }, []);

  return (
    <>
      {menuMobile && <MenuHamburguer />}
      <HeaderComponent>
        <HeaderLogo src={logo} alt="logo" />
        <HeaderLista>
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#resumo">Resumo</a>
          </li>
          <li>
            <a href="#portfolio">Portfólio</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </HeaderLista>
      </HeaderComponent>
    </>
  );
};

export default Header;
