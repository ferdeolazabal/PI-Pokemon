import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card ( pokemon ) {

console.log('pokemon types en card', pokemon.types)

    return (
    <div className="card">
        
        <Link to={`/pokemons/id/${pokemon.id}`} className="link">
            <img
                className="img"
                src={ `${pokemon.img? pokemon.img : '' } `} alt={ '' } />
        </Link>

        <h1 className="card_name">{ pokemon.name }
            <p className="type_title"> { `${pokemon.type? 'type:' : '' }` }</p>
                <>{
                    pokemon.types ?
                    pokemon.types.map((name,id) => 
                        <p
                            className="cardtype"
                            key={ id } >
                            { name }
                        </p>)
                        : ''
                }</>
        </h1>
    </div>
    )
};