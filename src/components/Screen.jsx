

const Screen = ({pokemones}) => {
    return (
        <>
            <div className="w-[450px] h-[300px] border-t-4 border-b-4 border-solid ">
                {pokemones?.map((pokemon) => (
                     <img src={pokemon?.sprites?.front_default} className="w-40 h-40" />
                ))}
            </div>
        
        </>
    )
}

export default Screen