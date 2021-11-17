import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPokemonDetail } from '../redux/actions';
import NavBar from '../components/NavBar/NavBar.jsx';

const PokemonDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);

    useEffect(() => {
        dispatch(getPokemonDetail( id ))
    }, [ dispatch, id ]);

    const { img, life, types, name, height, attack, defense, speed, weight } = pokemonDetail;

    console.log(pokemonDetail);

    return (
        <>
            <NavBar />
            {img && types && name ?
            <div className="containerDetail">
                <div className="cardDetail">
                    {id}
                    <h1 className="name">{ name }</h1>
                    <img className="imgDetail" src={ img } alt={ name } />
                    <div className="types">
                        { types?.map(types => (
                            <span key={ types.name }>{ types.name }</span>
                        )) }
                        <span>type: {types[0]}{types[1]}</span>
                    </div>
                    <div className="stats">
                        <section>
                            <p>Data</p>
                            <>
                                <span>{`Height: ${ height } `}</span>
                                <span>{`Weight: ${ weight }`}</span>
                            </>
                        </section>
                        <section>
                            <p>Stats</p>
                            <div>
                                <span>{ `Life: ${ life } `}</span>
                                <progress value={ life } max="200" />
                            </div>
                            <div>
                                <span>{ `Attack: ${ attack } `}</span>
                                <progress value={ attack } max="200" />
                            </div>
                            <div>
                                <span>{ `Defense: ${ defense } `}</span>
                                <progress value={ defense } max="200" />
                            </div>
                            <div>
                                <span>{ `Speed: ${ speed } `}</span>
                                <progress value={ speed } max="200" />
                            </div>
                        </section>
                </div>
            </div>
        </div>
        :   <div className="loading" >
                <img src= 'https://c.tenor.com/e6J4X97EZkIAAAAi/ash-now.gif' alt="loading..." />
            </div>
        }
        </>
    );
};

export default PokemonDetail;