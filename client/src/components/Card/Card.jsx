import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

// export default function Card ( { id, name, img, types } ) {
export default function Card ( pokemon ) {

    console.log('pokemon types en card', pokemon.types)

    return (
    <div className="card">
        <Link to={`/pokemons/id/${pokemon.id}`} className="link">
        <img className="img" src={ pokemon.img } alt={ pokemon.name } />
        </Link>
        <h1 className="name">{ pokemon.name }
        <span>
            <h4 className="h3">type:</h4>
                { pokemon.types && pokemon.types[0].PokemonType ?
                    pokemon.types.map((name,id) => 
                        <span key={id} className="h3">{ name.name }</span>) :
                    pokemon.types }
                {/* pokemon.types?.map((name, id)=>
                <h3 className="h3" key={id}>{name}</h3>
                )} */}

{/* types={ pokemons.types && pokemon.types[0].PokemonType ?
                                pokemon.types.map(type => type.name)  : 
                                pokemon.types } */}
        </span>
        </h1>
    </div>
    )
};