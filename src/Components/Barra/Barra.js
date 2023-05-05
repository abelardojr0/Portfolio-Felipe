import React from "react";
import {
  BarraEstrutura,
  BarraFrente,
  BarraFundo,
  BarraNivel,
  BarraTitulo,
} from "./BarraStyles";

const Barra = ({ base, tamanho, texto, nivel }) => {
  return (
    <>
      <BarraEstrutura>
        <BarraTitulo>{texto}</BarraTitulo>
        <BarraFundo style={{ width: `${base}px` }}>
          <BarraFrente
            style={{
              width: `${tamanho}%`,
            }}
          />
          <BarraNivel style={{ left: `${tamanho - 15}%` }}>{nivel}</BarraNivel>
        </BarraFundo>
      </BarraEstrutura>
    </>
  );
};

export default Barra;
