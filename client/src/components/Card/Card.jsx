import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card ( { id,  name, img, types } ) {

    // console.log('types',types)

    return (
    <div className="card">
        <h1 className="name">{ name }</h1>
        <Link to={`/pokemons/id/${id}`} className="link">
        <img className="img" src={ img } alt={ name } />
        </Link>
        {/* <h2 className = "types">type</h2> */}
        <span>{ types?.map((name, id)=><h3 className="h3" key={id}>- {name}</h3>)}</span>
    </div>
    )
};