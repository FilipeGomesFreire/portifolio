import React, { useState } from 'react';
import axios from 'axios';

const PokemonInfo = () => {
  const [id, setId] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false); // ⬅️ Novo state

  const fetchPokemon = async () => {
    try {
      setLoading(true); // ⬅️ Ativa loading
      const res = await axios.get(`https://portifolio-3exr.onrender.com/info/${id}`);
      setPokemon(res.data);
    } catch (err) {
      alert('Pokémon não encontrado!');
      setPokemon(null);
    } finally {
      setLoading(false); // ⬅️ Desativa loading (mesmo se der erro)
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
      <button onClick={fetchPokemon} disabled={loading}> {/* ⬅️ Desabilita botão durante loading */}
        {loading ? 'Carregando...' : 'Buscar'} {/* ⬅️ Altera texto */}
      </button>

      {loading && <p>Por favor aguarde... (o backend pode levar até 30s para "acordar")</p>} {/* ⬅️ Mensagem */}

      {pokemon && !loading && ( // ⬅️ Só mostra se tiver dados e não estiver loading
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