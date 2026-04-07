

const Screen = ({pokemones}) => {
    return (
        <>
            <div className="w-[450px] h-[250px] border-4 border-solid ">
                {pokemones?.map((pokemon) => (
                    <p>{pokemon.name}</p>
                ))}
            </div>
        
        </>
    )
}

export default Screen