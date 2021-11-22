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
                                <><b>Height: </b>{ height / 10 } Mt || </>
                                <><b>Weight: </b>{ weight / 10 } Kg</>
                            </p>
                        </section>
                        <section>
                            <>
                            <p>
                                <b>Life: </b>
                                <progress value={ life } max="100" />
                                <>{ life }</>
                            </p>
                            <p>
                                <b>Attack: </b>
                                <progress value={ attack } max="100" />
                                <span>{ attack }</span>
                            </p>
                            <p>
                                <b>Defense:  </b>
                                <progress value={ defense } max="100" />
                                <span>{ defense }</span>
                            </p>
                            <>
                                <b> Speed: </b>
                                <progress value={ speed } max="100" />
                                <span>{ speed }</span>
                            </>
                            </>
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