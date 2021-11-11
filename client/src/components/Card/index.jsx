import React from 'react'
import './index.css'

export default function Card ( { name, img, types  } ) {
// export default function Card ( props ) {


    // console.log(props)

    return (
    <div className="card">
        <h2>{ name }</h2>
        <img className="img" src={ img } alt={ name } />
        <h3> Types: { types?.map((name, id)=><h4 key={id}>{name}</h4>)}</h3>
    </div>
    )
};