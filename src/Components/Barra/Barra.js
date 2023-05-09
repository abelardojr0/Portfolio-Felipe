import React from "react";
import {
  BarraEstrutura,
  BarraFrente,
  BarraFundo,
  BarraNivel,
  BarraTitulo,
} from "./BarraStyles";

const Barra = ({ tamanho, texto, nivel }) => {
  const [modNivel, setModNivel] = React.useState(15);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setModNivel(19);
      } else if (window.innerWidth < 768) {
        setModNivel(23);
      } else if (window.innerWidth < 480) {
        setModNivel(23);
      } else {
        setModNivel(15);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <BarraEstrutura>
        <BarraTitulo>{texto}</BarraTitulo>
        <BarraFundo>
          <BarraFrente
            style={{
              width: `${tamanho}%`,
            }}
          />
          <BarraNivel style={{ left: `${tamanho - modNivel}%` }}>
            {nivel}
          </BarraNivel>
        </BarraFundo>
      </BarraEstrutura>
    </>
  );
};

export default Barra;
