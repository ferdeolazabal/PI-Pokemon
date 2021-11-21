import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar/NavBar.jsx'
import FilterSorts from '../components/Filters-Sorts/Filters-sorts.jsx'
import Paginate from '../components/Paginate/Paginate.jsx'
import Cards from '../components/Cards/Cards.jsx'

import './home.css'

export default function Home () {

const pokemons = useSelector(state => state.pokemons);
// const pokeSearch = useSelector(state => state.pokesearch);
// const allPokemons = useSelector(state => state.allPokemons);


const [ currentPage, setCurrentPage ] = useState(1);
const [ pokemonsPerPage ,  ] = useState(9);
const indexOfLastRecipe = currentPage * pokemonsPerPage;
const indexOfFirstRecipe = indexOfLastRecipe - pokemonsPerPage;
const currentPokemons = pokemons.slice(indexOfFirstRecipe, indexOfLastRecipe);
const paginate = pageNumber => setCurrentPage(pageNumber); 
console.log("current pokemons",currentPokemons)

    return (
        <>
            { pokemons.length >= 1 ?
            <div className='container'>
                <NavBar />
                <FilterSorts />
                <div className="paginate">
                    <Paginate pokemonsPerPage={ pokemonsPerPage }
                            allPokemons={ pokemons.length }
                            paginate={ paginate } />
                </div>
                {/* <div><Cards pokemons={ pokeSearch.length === 0 ? currentPokemons : pokeSearch }/></div> */}
                <div><Cards pokemons={ currentPokemons }/></div>
                <div className="paginate">
                    <Paginate pokemonsPerPage={ pokemonsPerPage }
                            allPokemons={ pokemons.length }
                            paginate={ paginate } />
                </div>
            </div>
            :
            <div className="loading" >
                <NavBar />
                {/* <FilterSorts /> */}
                <img src= 'https://c.tenor.com/e6J4X97EZkIAAAAi/ash-now.gif' alt="loading..." width="1000" height="700"/>
            </div>
            } 
        </>
    )
};
