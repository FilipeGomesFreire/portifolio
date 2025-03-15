import React from "react";
import "./PlacaEscrita.css"; // Importando o CSS do componente

function PlacaEscrita({ nome }) {
  return (
    <div className="placa-escrita">
      <span className="placa-texto">{nome}</span>
    </div>
  );
}

export default PlacaEscrita;
