import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getPokemons, newPokemon } from '../redux/actions'

import NavBar from '../components/NavBar/NavBar.jsx'
import constants from '../constants'
import Swal from 'sweetalert2'

import './formCreatePokemon.css'


const FormCreatePokemon = () => {

    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    const [ input, setInput ] = useState({
        name: '',
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
                
                // console.log(input)
                dispatch( newPokemon( input ) )
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your pokemon has been created !',
                    showConfirmButton: false,
                    timer: 1500
                })
                dispatch( getPokemons() );
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
        let filteredTypes = input.types.filter( ( type ) => type !== id,);
        
        setInput({
            ...input,
            types: filteredTypes,
        });
    };

    const typeNamebyid = (id) => {
        let typeName = types.filter( ( type ) => type.id === id,);
        return typeName[0].name
    }

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
                                <option 
                                    key={type.id} 
                                    value={type.id} 
                                >
                                    {type.name}
                                </option>
                            ))
                        }
                    </select>
                </p>
                <button 
                    className="submit_btn"
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
                    {
                        input.types.length <= 1 
                            ? ( <span>Type:</span> ) 
                            : ( <span>Types:</span> )
                    }
                </p>
                <ul>
                    { 
                        input.types.map( id => (
                    
                            <div key={ id } className="preview_list">
                                
                                <li>⭐ { typeNamebyid( id ) }</li>
                                <button
                                    className="deleteButton"
                                    onClick={() => filterTypes( id )}
                                >
                                    x
                                </button>

                            </div>
                        )) 
                    }

                </ul>
            </div>
        </div>
        )}
        </div>
    </div>
    )
};

export default FormCreatePokemon;