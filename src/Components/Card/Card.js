import React from "react";
import {
  CardComponent,
  CardImagem,
  CardOverlay,
  CardOverlaySubtitulo,
  CardOverlayTitulo,
  CardTitulo,
} from "./CardStyles";

import imagem1 from "../../Images/imagem1.png";
import imagem2 from "../../Images/imagem2.png";
import imagem3 from "../../Images/imagem3.png";
import imagem4 from "../../Images/imagem4.png";
import imagem5 from "../../Images/imagem5.png";
import imagem6 from "../../Images/imagem6.png";

const Card = ({
  id,
  titulo,
  imagem,
  tituloOver,
  subtituloOver,
  abrirModal,
}) => {
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

  return (
    <>
      <CardComponent onClick={abrirModal}>
        <CardTitulo>{titulo}</CardTitulo>
        <CardImagem src={imagemFinal} alt="imagem" />
        <CardOverlay id={id}>
          <CardOverlayTitulo>{tituloOver}</CardOverlayTitulo>
          <CardOverlaySubtitulo>{subtituloOver}</CardOverlaySubtitulo>
        </CardOverlay>
      </CardComponent>
    </>
  );
};

export default Card;
