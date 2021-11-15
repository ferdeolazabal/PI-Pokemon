import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards'
import FilterSorts from '../components/Filters-Sorts/Filters-sorts'
import Paginate from '../components/Paginate'
import SearchBar from '../components/SearchBar'

import './home.css'

export default function Home () {   

const pokemons = useSelector(state => state.pokemons)

const [ currentPage, setCurrentPage ] = useState(1);
const [ pokemonsPerPage ,  ] = useState(6);
const indexOfLastRecipe = currentPage * pokemonsPerPage;
const indexOfFirstRecipe = indexOfLastRecipe - pokemonsPerPage;
const currentPokemons = pokemons.slice(indexOfFirstRecipe, indexOfLastRecipe);
const paginate = pageNumber => setCurrentPage(pageNumber); 


    return (
        <>
            <div className='container'>
                <SearchBar />
                <FilterSorts />
                
                { <Paginate /> && <Cards /> ?
                    <>
                        <div className="paginate">
                            <Paginate
                                pokemonsPerPage={ pokemonsPerPage }
                                allPokemons={ pokemons.length }
                                paginate={ paginate }
                                />
                        </div>
                        <div>
                            <Cards pokemons={ currentPokemons }/>
                        </div>
                        <div className="paginate">
                            <Paginate
                                pokemonsPerPage={ pokemonsPerPage }
                                allPokemons={ pokemons.length }
                                paginate={ paginate }
                                />
                        </div>
                    </>
                : `Loading...`  
                }
                
            </div>
        </>
    )
}
