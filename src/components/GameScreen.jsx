import React, { useState } from 'react';

function randomPcDamage() {
  return Math.floor(Math.random() * 100) + 1;
}

function pokemonLabel(pokemon) {
  const n = pokemon?.name;
  if (!n) return '';
  return n.charAt(0).toUpperCase() + n.slice(1);
}

function GameScreen({ myPokeSelection, pcPokeSelection }) {
  const myPokemon = myPokeSelection?.[0]; // obtengo el primer pokemon de mi selección
  const pcPokemon = pcPokeSelection?.[0]; // obtengo el primer pokemon de la selección de la PC

  const [myHP, setMyHP] = useState(100);
  const [pcHP, setPcHP] = useState(100);

  const attacks = myPokemon?.moves?.slice(0, 4) ?? [];

  const battleOver = myHP <= 0 || pcHP <= 0; // si mi HP o el de la PC es 0, la batalla termina

  const myName = pokemonLabel(myPokemon);
  const pcName = pokemonLabel(pcPokemon);

  let winnerMessage = null;
  if (battleOver) {
    if (myHP <= 0 && pcHP <= 0) {
      winnerMessage = `Empate entre ${myName} y ${pcName}`;
    } else if (pcHP <= 0) {
      winnerMessage = `¡Ganó ${myName}!`;
    } else {
      winnerMessage = `¡Ganó ${pcName}!`;
    }
  }

  const handleAttack = (entry) => {
    if (battleOver) return;
    const damage = entry?.attack ?? 0;
    setPcHP((prev) => Math.max(0, prev - damage));
    setMyHP((prev) => Math.max(0, prev - randomPcDamage()));
  };

  if (!myPokemon || !pcPokemon) {
    return null;
  }

  return (
    <div className="switch-screen-inner game-screen">
      <div className="game-screen-battle">
        <div className="game-screen-fighter game-screen-fighter--player">
          <p className="game-screen-hp">
            HP: {myHP}/100
          </p>
          <img
            src={myPokemon?.sprites?.front_default}
            alt={myPokemon.name}
            className="game-screen-sprite"
          />
          <p className="game-screen-name">{myPokemon.name}</p>
        </div>

        <h2 className="game-screen-vs">VS</h2>

        <div className="game-screen-fighter game-screen-fighter--pc">
          <p className="game-screen-hp">
            HP: {pcHP}/100
          </p>
          <img
            src={pcPokemon?.sprites?.front_default}
            alt={pcPokemon.name}
            className="game-screen-sprite"
          />
          <p className="game-screen-name">{pcPokemon.name}</p>
        </div>
      </div>

      <div className="game-screen-actions">
        {attacks.map((entry, i) => (
          <button
            key={`${entry?.move?.name ?? 'atk'}-${i}`}
            type="button"
            className="game-screen-attack-btn"
            disabled={battleOver}
            onClick={() => handleAttack(entry)}
          >
            <span className="game-screen-attack-name">
              {entry?.move?.name?.replace?.(/-/g, ' ') ?? '—'}
            </span>
            <span className="game-screen-attack-pow">
              {entry?.attack ?? '—'}
            </span>
          </button>
        ))}
      </div>

      {winnerMessage && (
        <p className="game-screen-winner" role="status">
          {winnerMessage}
        </p>
      )}
    </div>
  );
}

export default GameScreen;
