import React from 'react';

const PokemonDetails = ({ actual = [] }) => {
  if (!actual?.length) {
    return null;
  }

  const pokemon = actual[0];
  const name = pokemon?.name;
  const front = pokemon?.sprites?.front_default;
  const back = pokemon?.sprites?.back_default;
  const moves = pokemon?.moves?.slice(0, 10) ?? [];

  return (
    <div className="pokemon-details-box">
      <h2 className="pokemon-details-title">{name ?? '—'}</h2>

      <div className="pokemon-details-content">
        <div className="pokemon-image-box">
          {front && (
            <img src={front} alt={`${name} frente`} className="pokemon-sprite-img" />
          )}
        </div>
        <div className="pokemon-image-box">
          {back && (
            <img src={back} alt={`${name} espalda`} className="pokemon-sprite-img" />
          )}
        </div>
      </div>

      <div className="pokemon-moves-box">
        <p className="pokemon-moves-heading">Movimientos</p>
        <ul className="pokemon-moves-list">
          {moves.map((entry, i) => (
            <li key={`${entry?.move?.name ?? i}-${i}`} className="pokemon-move-item">
              <span className="pokemon-move-name">{entry?.move?.name ?? '—'}</span>
              <span className="pokemon-move-attack">Ataque: {entry?.attack ?? '—'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
