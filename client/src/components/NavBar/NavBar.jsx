import React, { useState } from 'react';
import { Link,  } from 'react-router-dom';
import { useDispatch,  } from 'react-redux';
import { getPokemonName, getPokemons } from '../../redux/actions';

import './NavBar.css';


export default function SearchBar( ) {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");


    const handleInputChange = (e)=>{
        e.preventDefault();
        setInputValue(e.target.value);
    };
    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(getPokemonName(inputValue))
        setInputValue("");
    };

    const handleClickReset = () =>{
        dispatch( getPokemons());
    };


    return (
        <div className="navbar">
            <Link to="/" className="btn">Main</Link>
            <Link to="/home" onClick={ handleClickReset } className="btn">Home</Link>
            <form>
                <input
                    type="text"
                    placeholder="Look for your Pokemon.."
                    value={inputValue}
                    onChange={ e => handleInputChange(e) }

                    />
                    
                <button className="searchbtn" type="submit" onClick={ (e) => handleClick(e) }>Search</button>
            </form>
            <Link to="/pokemoncreate" className="btn">Create a Pokemon</Link>
        </div>
    )
}