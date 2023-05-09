import React from "react";
import {
  GradeCentro,
  GradeComponent,
  GradeLadoDireito,
  GradeLadoEsquerdo,
  GradeSubtitulo,
  GradeTexto,
  GradeTituloDireita,
  GradeTituloEsquerda,
} from "./GradeStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faToolbox,
  faDatabase,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const Grade = ({ titulo1, subtitulo, imagem, titulo2, texto }) => {
  const [icone, setIcone] = React.useState();

  React.useEffect(() => {
    const icons = {
      1: faSitemap,
      2: faToolbox,
      3: faDatabase,
      4: faServer,
    };

    setIcone(icons[imagem]);
  }, [imagem]);

  return (
    <>
      <GradeComponent>
        <GradeLadoEsquerdo>
          <GradeTituloEsquerda>{titulo1}</GradeTituloEsquerda>
          <GradeSubtitulo>{subtitulo}</GradeSubtitulo>
        </GradeLadoEsquerdo>
        <GradeCentro>
          <FontAwesomeIcon className="grade-icon" size="2x" icon={icone} />
        </GradeCentro>
        <GradeLadoDireito>
          <GradeTituloDireita>{titulo2}</GradeTituloDireita>
          <GradeTexto>{texto}</GradeTexto>
        </GradeLadoDireito>
      </GradeComponent>
    </>
  );
};

export default Grade;
