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
        <div className="detailcontainer" key="100">
            <NavBar />
            { types && name ?
            <div className="" key="101">
                <h1 className="name" key="110">{ name.toUpperCase() }</h1>
                    <span key="111"> N°{ id }</span>
                    <div className="containerDetail" key="102">
                        <img className="imgDetail" src={ img } alt={ name } />
                        
                        <div className="cardDetail" key="103">
                        
                        <div className="types" key="104">
                            { types?.map(types => (
                                <span key={ types.id }>{ types.name }</span>
                                )) 
                            }
                            <span>
                                Type:{` `}
                                    {types[types.length-1]} |{' '} 
                                    {types[[types.length-2]]}
                            </span>
                        </div>

                        <div className="stats" key="106">
                            <section key="1">
                                <p key="112">
                                    <><b>Height: </b>{ height / 10 } Mt || </>
                                    <><b>Weight: </b>{ weight / 10 } Kg</>
                                </p>
                            </section>
                            <section key="2">
                                <p key="10">
                                    <b>Life: </b>
                                    <progress value={ life } max="100" />
                                    <>{ life }</>
                                </p>
                                <p key="11">
                                    <b>Attack: </b>
                                    <progress value={ attack } max="100" />
                                    <span>{ attack }</span>
                                </p>
                                <p key="12">
                                    <b>Defense:  </b>
                                    <progress value={ defense } max="100" />
                                    <span>{ defense }</span>
                                </p>
                                <p key="13">
                                    <b> Speed: </b>
                                    <progress value={ speed } max="100" />
                                    <span>{ speed }</span>
                                </p>
                            </section>
                        </div>
                    </div>
            </div>
        </div>
        :   <div className="loading_detail" >
                <img src= 'https://c.tenor.com/e6J4X97EZkIAAAAi/ash-now.gif' alt="loading..." />
            </div>
        }
        </div>
    );
};

export default PokemonDetail;