import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getPokemons } from '../redux/actions'

import NavBar from '../components/NavBar/NavBar.jsx'
import constants from '../constants'
import './formCreatePokemon.css'


const FormCreatePokemon = () => {

    const types = useSelector(state => state.types)
    console.log('types', types)
    console.log('types filter name', types.filter(type => type.name))

    console.log('types.id', types.id)
    console.log('types.name', types.name)
    const dispatch = useDispatch()

    const [ input, setInput ] = useState({
        name: '',
        // img: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: [],

    });


    function submitForm(e){
        e.preventDefault()
            if (!input.name) alert('Name your Pokemon!');
            else if(!input.life) alert('life value is required');
            else if(!input.attack) alert('attack value is required')
            else if(!input.defense) alert('defense value is required')
            else if(!input.speed) alert('speed value is required')
            else if(!input.height) alert('height value is required')
            else if(!input.weight) alert('weight value is required')
            else if(!input.types) alert('type value is required')
            else {
                axios.post(`${ constants.POKEMONS_URL }`, input)
                dispatch( getPokemons() );
                alert('Pokemon Created!');
                stateReset();
            };
    };

    function stateReset(){
        setInput({
            name: '',
            life: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            types: [],
        });
    };

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelection = (e) => {
        e.preventDefault()
        let typesId = e.target.value
        typesId = Number(typesId)

        setInput(() =>({ 
            ...input, 
            // types: Array.from( new Set ([ ...input.types, typesId ]) ) // ok
            types: [...input.types, typesId] 
            })
        );
    };

    const filterTypes = (id) => {
        let filteredTypes = input.types.filter(
        ( type ) => type !== id,
        );
        
        setInput({
            ...input,
            types: filteredTypes,
        });
    };

    const [ submitButton, setSubmitButton ] = useState(true);

    useEffect(() => {
        input.name && input.types.length > 0
            ? setSubmitButton( false )
            : setSubmitButton( true );
        }, [ input.name, input.types.length ]);


return (
    <div className="cont_img_back">
        <header><NavBar/></header>

        <h1 className="Title_create">Create your Pokemon !</h1>
        <div className="pageCreatePokemon">
        <form className="containerCreate" onSubmit={ submitForm }>
            <div className="form-group">
                <p>
                <label>Name: </label>
                <input
                    type="text"
                    value= { input.name }
                    name="name"
                    placeholder="Enter name"
                    onChange={ handleChange }/>
                </p>
                <p>
                <label>Image: </label>
                <input
                    type="text"
                    value= { input.img }
                    name="img"
                    placeholder="Enter a url image"
                    onChange={ handleChange }/>
                </p>
                <p>
                <label>Life </label>
                <input
                    type="range"
                    min="0" max="100"
                    value= { input.life }
                    name="life" id="life"
                    onChange={ handleChange }/>
                <output type="range" htmlFor="life">{ input.life }</output>
                </p>
                <p>
                <label>Attack </label>
                <input
                    type="range"
                    min="0" max="100"
                    value= { input.attack }
                    name="attack" id="attack"
                    onChange={ handleChange }/>
                <output type="range" htmlFor="attack">{ input.attack }</output>
                </p>
                <p>
                <label>Defense </label>
                <input
                    type="range"
                    min="0" max="100"
                    value= { input.defense }
                    id="defense" name="defense"
                    onChange={ handleChange }/>
                <output type="range" htmlFor="defense">{ input.defense }</output>
                </p>
                <p>
                <label>Speed </label>
                <input
                    type="range"
                    min="0" max="100"
                    value= { input.speed }
                    id="speed" name="speed"
                    onChange={ handleChange }/>
                <output type="range" htmlFor="speed">{ input.speed }</output>
                </p>
                <p>
                <label>Height </label>
                <input
                    type="range"
                    min="0" max="100"
                    value= { input.height }
                    id="height" name="height"
                    onChange={ handleChange }/>
                <output type="range" htmlFor="height">{ input.height }</output>
                </p>
                <p>
                <label>Weight </label>
                <input
                    type="range"
                    min="0" max="100"
                    value= { input.weight }
                    id="weight" name="weight"
                    onChange={ handleChange }/>
                <output type="range" htmlFor="weight">{ input.weight }</output>
                </p>
                <p> Types: {` `} 
                    <select name="types" onChange={handleSelection}>
                        <option >select type</option>
                        {
                            types && types?.map(type => (
                                <option key={type.id} value={type.id} >{type.name}</option>
                                ))
                        }
                    </select>
                </p>
                <button className="submit_btn"
                        disabled={submitButton}
                        type="submit">
                        Catch it !
                </button>
            </div>
        </form>
        { ( input.name || input.types.length > 0 ) && ( 
        <div className="containerPreviewCreate">
            <h2>Name: {input.name}</h2>
            <img
                src={input.img}
                alt="select a pokemon img"
                style={{ width: '50%' }}
            />
            <div>
            <p>
                Types selected{' '}
                {/* {input.types.length <= 1 ? (
                <span>type</span>
                ) : (
                <span>types</span>
                )}
                : */}
            </p>
            <ul>
                { input.types.map((el) => (
                <div key={el} className="preview_list">
                <li>⭐ {el}</li>
                    <button
                    className="deleteButton"
                    onClick={() => filterTypes(el)}
                    >
                    x
                    </button>
                </div>
                )) }
            </ul>
            {
                types && types?.map(type => (
                    <option key={type.id} value={type.id} >{type.id}-{type.name}</option>
                    ))
            }
            </div>
        </div>
        )}
        </div>
    </div>
    )
};

export default FormCreatePokemon;