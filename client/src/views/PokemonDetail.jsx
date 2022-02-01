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
            
            <div>

                <h1 className="name" > { name.toUpperCase() } </h1>

                <div className="containerDetail">

                    <img 
                        className="imgDetail" 
                        src={ img } alt={ name } 
                    />
                    
                    <div className="cardDetail">
                    
                        <div className="types">
                            {
                                types.length === 0 ?
                                <span> No types asigned </span>
                                :
                                types.length === 1 ?
                                <span> Type: { types[0] } </span>
                                :
                                <span>Types: { types[0] } & { types[1] }</span>
                            }
                        </div>

                    <div className="stats">
                        <section>
                            <p>
                                <><b>Height: </b>{ height / 10 } Mt - </>
                                <><b>Weight: </b>{ weight / 10 } Kg</>
                            </p>
                        </section>

                        <section>

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
                            
                            <p>
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