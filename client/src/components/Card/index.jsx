import React from 'react'
import './index.css'

export default function Card ( { name, img, types  } ) {
    return (
    <div className="card">
        <h2>{ name }</h2>
        <img className="img" src={ img } alt={ name } />
        <h3> Types: { types?.map((name, index)=><h3 key={index}>{name}</h3>)}</h3>
    </div>
    )
};