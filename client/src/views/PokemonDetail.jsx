import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPokemonDetail } from '../redux/actions';
import SearchBar from '../components/SearchBar';

const PokemonDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);

    useEffect(() => {
        dispatch(getPokemonDetail( id ))
    }, [ dispatch, id ]);

    console.log('ide',id);

    const { img, life, types, name, height, attack, defense, speed, weight } = pokemonDetail;

    console.log('pokemonDetail', pokemonDetail);
    console.log('types', types);

    return (
        <>
            <SearchBar />
            {img && types && name ?
            <div className="containerDetail">
                <div className="cardDetail">
                    <h1 className="name">{ name }</h1>
                    <img className="imgDetail" src={ img } alt={ name } />
                    <div className="types">
                        { types?.map(type => (
                            <span key={ type.name }>{ type.name }</span>
                        )) }
                        <span>{types[0]}{types[1]}</span>
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
        : `Loading...`
        }
        </>
    );
};

export default PokemonDetail;