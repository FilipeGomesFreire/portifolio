// src/Sobre.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div>
      <h1>Página Sobre</h1>
      <Link to="/">
        <button>Ir para Home</button>
      </Link>
    </div>
  );
};

export default Sobre;
