import React, { useState } from 'react';
import axios from 'axios';

const PokemonInfo = () => {
  const [id, setId] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [requestTime, setRequestTime] = useState(0);

  // Função para logar no console e na UI (útil para debug)
  const log = (message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  };

  const fetchPokemon = async () => {
    const startTime = Date.now();
    try {
      setLoading(true);
      setPokemon(null);
      log(`Iniciando busca pelo Pokémon ID: ${id}`);
      
      const res = await axios.get(`https://portifolio-3exr.onrender.com/info/${id}`, {
        timeout: 30000,
        validateStatus: function (status) {
          return status >= 200 && status < 300; // Aceita apenas códigos 2xx como sucesso
        }
      });

      const endTime = Date.now();
      const duration = (endTime - startTime) / 1000;
      setRequestTime(duration);
      
      log(`Resposta recebida em ${duration} segundos`);
      log(`Dados recebidos: ${JSON.stringify(res.data)}`);
      
      setPokemon(res.data);
    } catch (err) {
      const endTime = Date.now();
      const duration = (endTime - startTime) / 1000;
      setRequestTime(duration);
      
      log(`Erro após ${duration} segundos: ${err.message}`);
      log(`Detalhes do erro: ${JSON.stringify({
        code: err.code,
        status: err.response?.status,
        config: {
          url: err.config?.url,
          timeout: err.config?.timeout
        }
      })}`);

      if (err.code === 'ECONNABORTED') {
        alert(`Timeout: O servidor demorou mais que 30 segundos para responder. (Tentou por ${duration} segundos)`);
      } else if (err.response?.status === 404) {
        alert('Pokémon não encontrado!');
      } else {
        alert(`Erro inesperado: ${err.message}`);
      }
    } finally {
      setLoading(false);
      log("Requisição finalizada");
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Buscar Pokémon</h2>
      <input
        type="number"
        placeholder="Digite o número do Pokémon"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchPokemon} disabled={loading}>
        {loading ? `Buscando... (${requestTime.toFixed(1)}s)` : 'Buscar'}
      </button>

      {loading && (
        <div>
          <p>Por favor aguarde... (Tempo decorrido: {requestTime.toFixed(1)}s)</p>
          <progress max="30" value={requestTime} />
        </div>
      )}

      {pokemon && !loading && (
        <div style={{ marginTop: '20px' }}>
          <h3>{pokemon.name}</h3>
          <p>
            Tipo: {pokemon.types[0]} {pokemon.types[1] ? ' / ' + pokemon.types[1] : ''}
          </p>
          <p><small>Tempo da requisição: {requestTime.toFixed(2)}s</small></p>
        </div>
      )}

      <div style={{ marginTop: '20px', fontSize: '12px', color: 'gray' }}>
        <p>Debug Console:</p>
        <p>Verifique o console do navegador (F12) para logs detalhados</p>
      </div>
    </div>
  );
};

export default PokemonInfo;