import React from 'react'
import { useDispatch } from 'react-redux'
import { getSource, getFilterType, sortPokemons } from '../../redux/actions'

export default function FilterSorts () {
    
    const dispatch = useDispatch()

    function handleFilterBySource(e){
        e.preventDefault();
        dispatch( getSource( e.target.value ) )
    };
    
    function handleFilterByType(e){
        e.preventDefault();
        dispatch( getFilterType( e.target.value ) )
    };

    function handleSortPokes(e){
        e.preventDefault();
        dispatch( sortPokemons( e.target.value ) )
    };

    return (
        <div className="filters">
            <select className="btn" onChange={ e => handleFilterBySource(e) }>
                <option value="">Filter by source</option>
                <option value="all">All Pokemons</option>
                <option value="api">Created By Api</option>
                <option value="db">Created By User</option>
            </select>
            < select className="btn" onChange={ e => handleFilterByType(e) }>
                <option value="">Filter by type</option>
                <option value="all">All</option>
                <option value="normal">Normal</option>
                <option value="fighting">Fighting</option>
                <option value="flying">Flying</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
                <option value="bug">Bug</option>
                <option value="ghost">Ghost</option>
                <option value="steel">Steel</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="fairy">Fairy</option>
                <option value="unknown">Unknown</option>
                <option value="shadow">Shadow</option>
            </select>
            <select className="btn" onChange={ e => handleSortPokes(e) }>
                <option value="">Sort by:</option>
                <option value="az">Alphabetically: A to Z</option>
                <option value="za">Alphabetically: Z to A</option>
                <option value="hl">Strength: High to Low</option>
                <option value="lh">Strength: Low to High</option>
                <option value="spHL">Speed: High to Low</option>
                <option value="spLH">Speed: Low to High</option>
            </select>
        </div>
    )
};