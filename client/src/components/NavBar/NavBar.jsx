import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,  } from 'react-redux';
import { getPokemonName } from '../../redux/actions';

import './NavBar.css';

export default function SearchBar( ) {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    };
    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(getPokemonName(inputValue))
        setInputValue("");
    };

    return (
        <div className="navbar">
            <Link to="/Home" className="btn">Pokemon App</Link>
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    value={inputValue}
                    onChange={ e => handleInputChange(e) } />
                <button type="submit" onClick={ handleClick }>Search</button>
            </form>
            <Link to="/pokemoncreate" className="btn">Create a Pokemon</Link>
        </div>
    )
}