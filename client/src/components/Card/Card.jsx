import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card ( { id, name, img, types } ) {

    return (
    <div className="card">
        <Link to={`/pokemons/id/${id}`} className="link">
        <img className="img" src={ img } alt={ name } />
        </Link>
        <h1 className="name">{ name }
        <span>
            <h4 className="h3">type:</h4>
                { types?.map((name, id)=>
                <h3 className="h3" key={id}>{name}</h3>
                )}
        </span>
        </h1>
    </div>
    )
};