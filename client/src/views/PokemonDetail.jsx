import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPokemonDetail } from '../redux/actions';
import NavBar from '../components/NavBar/NavBar.jsx';
import './pokemondetail.css'


const PokemonDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);

    useEffect(() => {
        dispatch(getPokemonDetail( id ))
    }, [ dispatch, id ]);

    const { img, life, types, name, height, attack, defense, speed, weight } = pokemonDetail;


    return (
        <div className="detailcontainer">
            <NavBar />
            { types && name ?
            <div className="">
                    <h1 className="name">{ name.toUpperCase() }</h1>
                    <span> N°{ id }</span>
                    <div className="containerDetail">
                    <img className="imgDetail" src={ img } alt={ name } />
                <div className="cardDetail">
                    <div className="types">
                        { types?.map(types => (
                            <span key={ types.name }>{ types.name }</span>
                        )) }
                        <span>Type: {types[0]} | {types[1]}</span>
                    </div>
                    <div className="stats">
                        <section>
                            <p>
                                <span>{`Height: ${ height / 10 } Mt || `}</span>
                                <span>{`Weight: ${ weight / 10 } Kg`}</span>
                            </p>
                        </section>
                        <section>
                            <p>
                            <>
                                <span>{ `Life: ${ life } `}</span>
                                <progress value={ life } max="100" />
                            </>
                            <>
                                <span>{ `Attack: ${ attack } `}</span>
                                <progress value={ attack } max="100" />
                            </>
                            <>
                                <span>{ `Defense: ${ defense } `}</span>
                                <progress value={ defense } max="100" />
                            </>
                            <>
                                <span>{ `Speed: ${ speed } `}</span>
                                <progress value={ speed } max="100" />
                            </>
                            </p>
                        </section>
                </div>
            </div>
        </div>
        </div>
        :   <div className="loading" >
                <img src= 'https://c.tenor.com/e6J4X97EZkIAAAAi/ash-now.gif' alt="loading..." />
            </div>
        }
        </div>
    );
};

export default PokemonDetail;