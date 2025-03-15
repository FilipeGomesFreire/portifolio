import React, { useState, useEffect} from "react";
import "./BoardModal.css"; 
import TextBannerJogo from './TextBannerJogo';

const BoardModal = () => {
    const [dadoPlayer, setNumeroPlayer] = useState(0);
    const [somadadoPlayer, somasetNumeroPlayer] = useState(0); 
    const [vidaPlayer, setVidaPlayer] = useState(50); 
    const [dadoEnemy, setNumeroEnemy] = useState(0);
    const [somadadoEnemy, somasetNumeroEnemy] = useState(0); 
    const [vidaEnemy, setVidaEnemy] = useState(50);
    const [imagemBotao, setImagemBotao] = useState("dadorolando.gif");
    const [imagemBotaoEnemy, setImagemBotaoEnemy] = useState("diceVazio.png");
    const [isDisabled, setIsDisabled] = useState(false);
    const [isDisabled2, setIsDisabled2] = useState(true);
    const [imagemPlayer, setImagemPlayer] = useState("guerreiro.png");
    const [imagemEnemy, setImagemEnemy] = useState("ladino.png");

    const [valorzero, setvalorzero] = useState(0);


    const [HitGifPlayer, setHitGifPlayer] = useState("attackgif.gif");
    const [HitGifEnemy, setHitGifEnemy] = useState("attackgif.gif");
    const [hiddenHitGifPlayer, setHiddenHitGifPlayer] = useState(true);
    const [hiddenHitGifEnemy, setHiddenHitGifEnemy] = useState(true);






    


    const gerarNumeroEnemy = () => {
        let somaTotal = 0; // Variável para controlar a soma total
      
        const intervalo = setInterval(() => {
          if (somaTotal >= 15) {
           

            setHiddenHitGifPlayer(false);

           
                clearInterval(intervalo); // Para o intervalo
                setVidaPlayer((prevSoma) => prevSoma - somaTotal);
                console.log("O inimigo causou " + somaTotal);
                setIsDisabled(false);
                setNumeroEnemy(somaTotal);
                setImagemBotao("dadorolando.gif");
                setImagemBotaoEnemy("diceVazio.png");


                setTimeout(() => {
                setHiddenHitGifPlayer(true);
                
                }, 600);
                return;
            
          }
      
          const valorDadoEnemy = Math.floor(Math.random() * 6) + 1;
      
          if (valorDadoEnemy === 1) {
            somaTotal = 0;
            console.log('Inimigo errou');
            setIsDisabled(false);
            clearInterval(intervalo); // Para o intervalo
            setImagemBotaoEnemy("dice1.png");
            setImagemBotao("dadorolando.gif");
            return;
          }
      
          // Atualiza a imagem do dado conforme o valor
          const imagem = `dice${valorDadoEnemy}.png`;
          setImagemBotaoEnemy(imagem);
      
          // Atualiza a soma total
          somaTotal += valorDadoEnemy;
          setNumeroEnemy(valorDadoEnemy);
          console.log('Valor do dado inimigo:', valorDadoEnemy);
      
          // Simula a rotação do dado
          setTimeout(() => {
            setImagemBotaoEnemy("dadorolando.gif");
          }, 400); // Mostra a animação por 200ms antes do próximo valor
        }, 600); // Repete a cada 400ms
      };
      

    //---------------------------------------------

    const gerarNumero = () => {

        let valorDadoPlayer = Math.floor(Math.random() * 6) + 1;

        console.log("somadadoPlayer "+somadadoPlayer)

        if(valorDadoPlayer === 1 && somadadoPlayer === 0){
            // ha vei eu fiz isso pra não ficar dando 1 na primeira jogada sempre, é muito frustrante quando vc ta jogando e é seu turno e na primerira jogada da 1, até parece q o jogo ta bugado... melhor deixar assim q pelo menos vc tem um 2 certo.

            console.log("deu 1 na primeira ")
            valorDadoPlayer = valorDadoPlayer + 1;
        }
       



       setIsDisabled2(false);
    //    const valorDadoPlayer = 1;
        if (valorDadoPlayer === 1) {
           // alert("PERDEU");
            somasetNumeroPlayer((prevSoma) => prevSoma = 0);
            setImagemBotao("dice1.png");
            setIsDisabled(true);
            setIsDisabled2(true);
          
            gerarNumeroEnemy();

        } else {
            const imagem = `dice${valorDadoPlayer}.png`;
            setImagemBotao(imagem);

            somasetNumeroPlayer((prevSoma) => prevSoma + valorDadoPlayer);

            setIsDisabled(true);

            // Reativa o botão após 300 milissegundos
            setTimeout(() => {
            setIsDisabled(false);
            setImagemBotao("dadorolando.gif");
            }, 600);
            
        }
        setNumeroPlayer(valorDadoPlayer);
        console.log('Valor do dado:', valorDadoPlayer); 
    };
//============================================

const acabou = () => {
    closeModal();
}

useEffect(() => {
    if (vidaEnemy < 1) {
        alert("Você ganhou!");
        acabou();
    }
}, [vidaEnemy]);

useEffect(() => {
    if (vidaPlayer < 1) {
        alert("Você Perdeu!");
        acabou();
    }
}, [vidaPlayer]);

const causarDano = () => {
    console.log("somadadoPlayer " + somadadoPlayer);

    setImagemBotao("diceVazio.png");
    setVidaEnemy((prevSoma) => prevSoma - somadadoPlayer);

    setIsDisabled(true);
    setIsDisabled2(true);
    setvalorzero(0);

    setHiddenHitGifEnemy(false);
    somasetNumeroPlayer((prevSoma) => prevSoma = 0);

    setTimeout(() => {
        setHiddenHitGifEnemy(true);
        gerarNumeroEnemy();
    }, 600);
};


//================================================
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* Botão para abrir o modal */}
            <button onClick={openModal} className="open-modal-btn">
                Abrir jogo
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {/* Botão para fechar o modal */}
                        <button onClick={closeModal} className="close-modal-btn">
                            X
                        </button>
                        
                        <div className="row">
                            <div className="column">
                                
                                <div>
                                
                                <img className="imgPlayer" src={imagemPlayer} alt="Player" />
                                <img className="imgGifPlayer" src={HitGifPlayer} alt="Hit Player" hidden={hiddenHitGifPlayer} />
                               
                                
                                {vidaPlayer !== null ? <h2>Sua Vida: {vidaPlayer}</h2> : <h2>-</h2>}
                                {dadoPlayer !== null ? <h2>Valor do dado: {dadoPlayer}</h2> : <h2>-</h2>}
                                {somadadoPlayer !== null ? <h2>Dano Total: {somadadoPlayer}</h2> : <h2>-</h2>}
                                <div className="row">
                                    <button className="botaoAtaque" onClick={gerarNumero} disabled={isDisabled}>
                                        <img className="imgbotaoAtaque" src={imagemBotao} alt="Botão para gerar número" />
                                    </button>
                                    <button className="botaoAtaque" onClick={causarDano} disabled={isDisabled2}>
                                        atacar
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="column">
                                
                                
                            <div>
                                <img className="imgGifEnemy" src={HitGifEnemy} alt="Hit Enemy" hidden={hiddenHitGifEnemy} />
                                <img className="imgEnemy" src={imagemEnemy} alt="Enemy" />
                                
                                {vidaEnemy !== null ? <h2>Vida inimigo: {vidaEnemy}</h2> : <h2>-</h2>}
                                {dadoEnemy !== null ? <h2>Valor do dado: {dadoEnemy}</h2> : <h2>-</h2>}
                            
                                <img className="botaoAtaque" src={imagemBotaoEnemy} alt="dado" />
                                </div>    
                            </div>
                        </div>
                        <TextBannerJogo/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BoardModal;
