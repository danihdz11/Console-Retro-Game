

const Screen = ({ pokemones, position }) => {
  return (
    <div className="switch-screen-inner p-3">
      <div className="grid grid-cols-4 gap-x-2 gap-y-3 pb-2">
        {pokemones?.map((pokemon, index) => (
          <div
            key={pokemon.id ?? index}
            style={{ color: position === pokemon.id ? '#ff5f53' : '#d4d4d4' }}
            className="flex min-w-0 flex-col items-center rounded-md border border-neutral-600/50 bg-black/25 px-1 py-2"
          >
            <img
              src={pokemon?.sprites?.front_default}
              alt={pokemon.name}
              className="h-20 w-20 object-contain"
            />
            <p className="mt-1 w-full truncate text-center text-xs capitalize">
              {pokemon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screen;
