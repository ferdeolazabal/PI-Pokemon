import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Card ( { id,  name, img, types } ) {


    return (
    <div className="card">
        <Link to={`/pokemons/id/${id}`} className="link">
        <h1>{ name }</h1>
        <img className="img" src={ img } alt={ name } />
        </Link>
        <h3> Types:</h3>
        <span>{ types?.map((name, id)=><h3 key={id}>{name}</h3>)}</span>
    </div>
    )
};