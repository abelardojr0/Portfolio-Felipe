import React from "react";
import {
  GradeCentro,
  GradeCentroImagem,
  GradeComponent,
  GradeLadoDireito,
  GradeLadoEsquerdo,
  GradeSubtitulo,
  GradeTexto,
  GradeTituloDireita,
  GradeTituloEsquerda,
} from "./GradeStyles";
import icone1 from "../../Images/icone1.png";
import icone2 from "../../Images/icone2.png";
import icone3 from "../../Images/icone3.png";
import icone4 from "../../Images/icone4.png";

const Grade = ({ titulo1, subtitulo, imagem, titulo2, texto }) => {
  const [icone, setIcone] = React.useState();

  React.useEffect(() => {
    const icons = {
      1: icone1,
      2: icone2,
      3: icone3,
      4: icone4,
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
          <GradeCentroImagem src={icone} alt="imagem" />
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
