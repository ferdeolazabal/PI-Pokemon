import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getPokemons } from '../../redux/actions';

import './Card.css'

export default function Card ( pokemon ) {

    const dispatch = useDispatch()
    // console.log(pokemon.name)
    const handleEmptyFilter = () => {
        if(pokemon.name === 'Type not Found'){
            Swal.fire   ({  
                icon: 'warning',
                title: 'Oops...',
                text: 'No hay pokemons con ese tipo, intenta con otro!',
            })
            dispatch(getPokemons())

        } else if (pokemon.name === 'Pokemon not Found'){
            Swal.fire   ({
                icon: 'warning',
                title: 'Oops...',
                text: 'No hay pokemons con ese nombre, intenta con otro!',
            })
            dispatch(getPokemons())
        };
            return pokemon.name
    }

    return (
    <div className="card">
        
        <Link to={`/pokemons/id/${pokemon.id}`} className="link">
            <img
                className="img"
                src={ `${pokemon.img? pokemon.img : '' } `} alt={ '' } />
        </Link>

        <h1 className="card_name">{ handleEmptyFilter() }
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