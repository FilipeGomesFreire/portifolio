import React, { useState } from 'react';
import axios from 'axios';

const PokemonInfo = () => {
  const [id, setId] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await axios.get(`https://portifolio-3exr.onrender.com/info/${id}`, {
        timeout: 30000 // 30 segundos de timeout
      });
      
      setPokemon(res.data);
    } catch (err) {
      setError(err.message.includes('timeout') 
        ? 'Servidor demorando muito para responder' 
        : 'Pokémon não encontrado');
      setPokemon(null);
    } finally {
      setLoading(false);
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
      <button 
        onClick={fetchPokemon} 
        disabled={loading}
      >
        {loading ? 'Buscando...' : 'Buscar'}
      </button>

      {loading && <p>Aguarde, o servidor pode levar alguns segundos para responder...</p>}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {pokemon && (
        <div style={{ marginTop: '20px' }}>
          <h3>{pokemon.name}</h3>
          <p>
            Tipo: {pokemon.types.join(' / ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;