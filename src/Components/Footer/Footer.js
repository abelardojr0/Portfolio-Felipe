import React from "react";
import {
  FooterBotaoEmail,
  FooterComponent,
  FooterDetalhes,
  FooterDetalhesDestaque,
  FooterDetalhesTexto,
  FooterSociais,
  FooterTexto,
  FooterTitulo,
} from "./FooterStyles";
import { TituloColorido } from "../../GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <FooterComponent id="contato">
      <TituloColorido>Contato</TituloColorido>
      <FooterTitulo>FALE COMIGO!</FooterTitulo>
      <FooterTexto>Será uma honra poder te ajudar!</FooterTexto>
      <FooterSociais>
        <FontAwesomeIcon className="icone" size="3x" icon={faGithub} />
        <FontAwesomeIcon className="icone" size="3x" icon={faLinkedin} />
        <FontAwesomeIcon className="icone" size="3x" icon={faEnvelope} />
      </FooterSociais>
      <FooterBotaoEmail>Enviar Email</FooterBotaoEmail>
      <FooterDetalhes>
        <FooterDetalhesTexto>
          Design by{" "}
          <FooterDetalhesDestaque>Abelardo Júnior</FooterDetalhesDestaque>{" "}
        </FooterDetalhesTexto>
      </FooterDetalhes>
    </FooterComponent>
  );
};

export default Footer;
