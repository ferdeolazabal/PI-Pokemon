import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,  } from 'react-redux';
import { getPokemons  } from '../../redux/actions';

import './index.css';

export default function SearchBar() {

    const dispatch = useDispatch();
    
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getPokemons(e.target.value));
    }

    return (
        <div className="navbar">
            <Link to="/home" className="link"><h1>Pokemon App</h1></Link>
            <form>    
                <input type="text" placeholder="Search" onChange={ e => handleSearch(e)} />
            </form>
            <Link to="/pokemoncreate" className="btn">Create a Pokemon</Link>
        </div>
    )
}