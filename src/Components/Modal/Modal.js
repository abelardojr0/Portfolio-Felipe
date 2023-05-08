import React from "react";
import {
  ModalAreas,
  ModalBotao,
  ModalBotaoFechar,
  ModalCard,
  ModalComponent,
  ModalDescricao,
  ModalImagem,
  ModalInfos,
  ModalTitulo,
} from "./ModalStyles";

import imagem1 from "../../Images/imagem1.png";
import imagem2 from "../../Images/imagem2.png";
import imagem3 from "../../Images/imagem3.png";
import imagem4 from "../../Images/imagem4.png";
import imagem5 from "../../Images/imagem5.png";
import imagem6 from "../../Images/imagem6.png";

const Modal = ({ isOpen, onClose, titulo, descricao, area, imagem }) => {
  const [imagemFinal, setImagemFinal] = React.useState();

  React.useEffect(() => {
    const imagens = {
      1: imagem1,
      2: imagem2,
      3: imagem3,
      4: imagem4,
      5: imagem5,
      6: imagem6,
    };

    setImagemFinal(imagens[imagem]);
  }, [imagem]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalComponent id="modal" onClick={onClose}>
      <ModalCard>
        <ModalBotaoFechar id="fechar" onClick={onClose}>
          X
        </ModalBotaoFechar>
        <ModalImagem src={imagemFinal} alt={titulo} />
        <ModalInfos>
          <ModalTitulo>{titulo}</ModalTitulo>
          <ModalDescricao>{descricao}</ModalDescricao>
          <ModalAreas>{area}</ModalAreas>
        </ModalInfos>
        <ModalBotao>Ver Projeto</ModalBotao>
      </ModalCard>
    </ModalComponent>
  );
};

export default Modal;
