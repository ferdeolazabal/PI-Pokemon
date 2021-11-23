import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card ( pokemon ) {

// console.log('pokemon types en card', pokemon.types)

    return (
    <div className="card">
        
        <Link to={`/pokemons/id/${pokemon.id}`} className="link">
            <img className="img" src={ pokemon.img } alt={ pokemon.name } />
        </Link>

        <h1 className="card_name">{ pokemon.name }
            <p className="type_title">type:</p>
                <>{
                    pokemon.types && pokemon.types[0].PokemonType ?
                        pokemon.types.map((name,id) => 
                        <p 
                            key={id}
                            className="cardtype">
                            { name.name }
                        </p>)
                        :
                        <p
                            key={pokemon.id}
                            className="cardtype">
                            { pokemon.types }
                        </p>
                }</>
        </h1>
    </div>
    )
};