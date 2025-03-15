// src/components/TextBanner.js
import React from 'react';
import './TextBanner.css';

const TextBanner = () => {
    return (
        <div className="text-banner">
            <p className="banner-text">
            
                Role um dado de 6 lados e acumule dano a cada jogada. 
                Use o dano acumulado para atacar o oponente e passe seu turno, 
                mas cuidado! Se tirar "1", você perde todo o dano acumulado 
                e o turno será passado automaticamente.
         
                Cada jogador alterna turnos, buscando o equilíbrio entre 
                arriscar mais jogadas e proteger o dano acumulado. 
                A estratégia é essencial para vencer.
            
                Vença o jogo ao reduzir a vida do oponente a zero. 
                Aproveite bem as suas jogadas e escolha o momento certo 
                para causar o máximo de dano possível!
            </p>
        </div>
    );
};

export default TextBanner;
