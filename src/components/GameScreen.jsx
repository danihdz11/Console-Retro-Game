
import React from 'react'

function GameScreen({ myPokeSelection, pcPokeSelection }) {
  return (
    <div className="switch-screen-inner flex flex-col items-center justify-center gap-4 p-4 text-neutral-300">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {myPokeSelection?.map((pokemon, index) => (
            <div key={index} className="flex flex-col items-center" >
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="h-28 w-28 object-contain"
              />
              <p className="mt-1 capitalize">{pokemon.name}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold tracking-widest text-white">VS</h2>
          {pcPokeSelection?.map((pokemon, index) => (
            <div key={index} className="flex flex-col items-center" >
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="h-28 w-28 object-contain"
              />
              <p className="mt-1 capitalize">{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default GameScreen
