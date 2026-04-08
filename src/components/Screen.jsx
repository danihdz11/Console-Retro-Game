

const Screen = ({ pokemones, position }) => {
  const rowStart = Math.floor((position - 1) / 4) * 4 + 1
  const rowIds = [rowStart, rowStart + 1, rowStart + 2, rowStart + 3].filter(
    (id) => id >= 1 && id <= 100
  )
  const byId = new Map((pokemones ?? []).map((p) => [p.id, p]))
  const visible = rowIds.map((id) => ({ id, pokemon: byId.get(id) }))

  return (
    <div className="switch-screen-inner flex h-full p-4">
        <div className="grid h-full w-full grid-cols-2 place-content-center gap-x-6 gap-y-4">
          {visible.map(({ id, pokemon }) => (
            <div
              key={id}
              style={{ color: position === id ? '#ff5f53' : '#d4d4d4' }}
              className="flex flex-col items-center justify-center rounded-md border border-neutral-600/50 bg-black/25 px-3 py-3"
            >
              {pokemon ? (
                <>
                  <img
                    src={pokemon?.sprites?.front_default}
                    alt={pokemon.name}
                    className="h-28 w-28 object-contain"
                  />
                  <p className="mt-2 max-w-[8rem] truncate text-center text-sm capitalize">
                    {pokemon.name}
                  </p>
                </>
              ) : (
                <div className="flex h-28 w-28 items-center justify-center text-xs text-neutral-500">
                  …
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
  );
};

export default Screen;
