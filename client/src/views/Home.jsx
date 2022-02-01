import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar/NavBar.jsx'
import FilterSorts from '../components/Filters-Sorts/Filters-sorts.jsx'
import Paginate from '../components/Paginate/Paginate.jsx'
import Cards from '../components/Cards/Cards.jsx'

import './home.css'

export default function Home () {

const pokemons = useSelector(state => state.pokemons);

const [ currentPage, setCurrentPage ] = useState(1);
const pokemonsPerPage = 9;
const setPokemonsPerPage = 12

const indexOfLastPoke = currentPage === 1 ? 
                        pokemonsPerPage * currentPage : 
                        setPokemonsPerPage * currentPage;
const indexOfFirstPoke = currentPage === 1 ?
                            indexOfLastPoke - pokemonsPerPage :
                            indexOfLastPoke - setPokemonsPerPage; 
const currentPokemons = pokemons?.slice(indexOfFirstPoke, indexOfLastPoke);

const paginate = pageNumber => setCurrentPage(pageNumber); 


    return (
        <div>
            { pokemons.length >= 1 ?
            <div className='container'>
                <NavBar />
                <FilterSorts />

                <div className="paginate">
                    <Paginate pokemonsPerPage={ pokemonsPerPage }
                            allPokemons={ pokemons.length }
                            paginate={ paginate } />
                </div>
                
                <div>
                    <Cards pokemons={ currentPokemons }/>
                </div>
                
                <div className="paginate">
                    <Paginate pokemonsPerPage={ pokemonsPerPage }
                            allPokemons={ pokemons.length }
                            paginate={ paginate } />
                </div>
            </div>
            :
            <div className="loading" >
                <NavBar />
                <img src= 'https://c.tenor.com/e6J4X97EZkIAAAAi/ash-now.gif' 
                    alt="loading..." width="1000" height="700"
                />
            </div>
            } 
        </div>
    )
};