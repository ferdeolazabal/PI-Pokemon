import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cards from '../components/Cards'
import Paginate from '../components/Paginate'
import SearchBar from '../components/SearchBar'
import { getSource } from '../redux/actions'
import './home.css'


export default function Home () {   

const dispatch = useDispatch()

const pokemons = useSelector(state => state.pokemons)
const [ currentPage, setCurrentPage ] = useState(1);
const [ pokemonsPerPage ,  ] = useState(6);
const indexOfLastRecipe = currentPage * pokemonsPerPage;
const indexOfFirstRecipe = indexOfLastRecipe - pokemonsPerPage;
const currentPokemons = pokemons.slice(indexOfFirstRecipe, indexOfLastRecipe);
const paginate = pageNumber => setCurrentPage(pageNumber); 

function handleFilterBySource(e){
    e.preventDefault();
    dispatch( getSource( e.target.value ) )
}

    return (
        <>
        <div className='container'>
            <SearchBar />
            <span className="2">
            <select className="btn" onChange={e => handleFilterBySource(e)}>
                <option value="">Filter by source</option>
                <option value="all">All Pokemons</option>
                <option value="api">Created By Api</option>
                <option value="db">Created By User</option>
            </select>
            < select className="btn" >
                <option value="">Filter by type</option>
                <option value="all">All</option>
                <option value="1">Normal</option>
                <option value="2">Fighting</option>
                <option value="3">Flying</option>
                <option value="4">Poison</option>
                <option value="5">Ground</option>
                <option value="6">Rock</option>
                <option value="7">Bug</option>
                <option value="8">Ghost</option>
                <option value="9">Steel</option>
                <option value="10">Fire</option>
                <option value="11">Water</option>
                <option value="12">Grass</option>
                <option value="13">Electric</option>
                <option value="14">Psychic</option>
                <option value="15">Ice</option>
                <option value="16">Dragon</option>
                <option value="17">Dark</option>
                <option value="18">Fairy</option>
                <option value="17">Unknown</option>
                <option value="18">Shadow</option>
            </select>
            <select className="btn"  >
                <option value="">Sort by:</option>
                <option value="az">Alphabetically: A to Z</option>
                <option value="za">Alphabetically: Z to A</option>
                <option value="">Strength: High to Low</option>
                <option value="asc">Strength: Low to High</option>
            </select>
        </span>

        <div className="paginate">
            <Paginate
                pokemonsPerPage={ pokemonsPerPage }
                allPokemons={ pokemons.length }
                paginate={ paginate }
                />
        </div>

            <Cards pokemons={ currentPokemons }/>
        </div>
        </>
    )
}
