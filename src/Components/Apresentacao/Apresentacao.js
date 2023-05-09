import React from "react";
import {
  ApresentacaoComponent,
  ApresentacaoConteudo,
  ConteudoAreas,
  ConteudoBemVindo,
  ConteudoBotaoSobre,
  ConteudoEuSou,
  ConteudoNome,
  ConteudoSociais,
} from "./ApresentacaoStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Apresentacao = () => {
  return (
    <>
      <ApresentacaoComponent id="inicio">
        <ApresentacaoConteudo>
          <ConteudoBemVindo>Olá, Seja bem vindo!</ConteudoBemVindo>
          <ConteudoEuSou>Eu sou</ConteudoEuSou>
          <ConteudoNome>Felipe Menezes</ConteudoNome>
          <ConteudoAreas>
            <li>Engenheiro de Dados</li>
            <li>Cientista de Dados</li>
            <li>Arquiteto de Dados</li>
          </ConteudoAreas>
          <ConteudoBotaoSobre>
            <a href="#sobre">Sobre mim ↴</a>
          </ConteudoBotaoSobre>
          <ConteudoSociais>
            <FontAwesomeIcon className="icone" size="3x" icon={faGithub} />
            <FontAwesomeIcon className="icone" size="3x" icon={faLinkedin} />
            <FontAwesomeIcon className="icone" size="3x" icon={faEnvelope} />
          </ConteudoSociais>
        </ApresentacaoConteudo>
      </ApresentacaoComponent>
    </>
  );
};

export default Apresentacao;
