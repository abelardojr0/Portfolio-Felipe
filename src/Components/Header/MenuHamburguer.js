import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./styles.css";
import logo from "../../Images/logo.png";
import { HeaderLogo } from "./HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faFileSignature,
  faIdCardClip,
  faGear,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <Menu isOpen={isOpen} zIndex={10}>
      <HeaderLogo src={logo} alt="logo" />

      <a onClick={() => setIsOpen(false)} href="#inicio">
        <FontAwesomeIcon
          className="hamburguer-icon"
          s
          size="1.5x"
          icon={faHome}
        />
        Início
      </a>
      <a onClick={() => setIsOpen(false)} href="#sobre">
        <FontAwesomeIcon
          className="hamburguer-icon"
          s
          size="1.5x"
          icon={faAddressCard}
        />
        Sobre
      </a>
      <a onClick={() => setIsOpen(false)} href="#resumo">
        <FontAwesomeIcon
          className="hamburguer-icon"
          s
          size="1.5x"
          icon={faFileSignature}
        />
        Resumo
      </a>
      <a onClick={() => setIsOpen(false)} href="#portfolio">
        <FontAwesomeIcon
          className="hamburguer-icon"
          s
          size="1.5x"
          icon={faIdCardClip}
        />
        Portfólio
      </a>
      <a onClick={() => setIsOpen(false)} href="#servicos">
        <FontAwesomeIcon
          className="hamburguer-icon"
          s
          size="1.5x"
          icon={faGear}
        />
        Serviços
      </a>
      <a onClick={() => setIsOpen(false)} href="#contato">
        <FontAwesomeIcon
          className="hamburguer-icon"
          s
          size="1.5x"
          icon={faAddressBook}
        />
        Contato
      </a>
    </Menu>
  );
};

export default MenuHamburguer;
