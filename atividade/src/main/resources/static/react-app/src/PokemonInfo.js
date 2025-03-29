import React, { useState } from 'react';
import axios from 'axios';

const PokemonInfo = () => {
  const [id, setId] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(`https://seu-app-no-render.onrender.com/info/${id}`);
      setPokemon(res.data);
    } catch (err) {
      alert('Pokémon não encontrado!');
      setPokemon(null);
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
      <button onClick={fetchPokemon}>Buscar</button>

      {pokemon && (
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
