import React, { useState, useEffect } from 'react';
import axios from 'axios';

// URL explícita para evitar qualquer confusão
const API_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8080' 
  : 'https://portifolio-3exr.onrender.com';

const PokemonInfo = () => {
  const [id, setId] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  // Verificação no console para confirmar qual URL está sendo usada
  useEffect(() => {
    console.log('URL da API:', API_URL);
    console.log('Modo de desenvolvimento:', process.env.NODE_ENV);
  }, []);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      console.log(`Fazendo requisição para: ${API_URL}/info/${id}`);
      
      const res = await axios.get(`${API_URL}/info/${id}`);
      setPokemon(res.data);
    } catch (err) {
      console.error('Erro na requisição:', err);
      alert('Pokémon não encontrado!');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Buscar Pokémon..</h2>
      <input
        type="number"
        placeholder="Digite o número do Pokémon"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchPokemon} disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar'}
      </button>

      {pokemon && !loading && (
        <div style={{ marginTop: '20px' }}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
          <p>
            Tipo: {pokemon.types[0]} {pokemon.types[1] ? ' / ' + pokemon.types[1] : ''}
          </p>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;