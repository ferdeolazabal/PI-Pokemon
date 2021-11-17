import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../redux/actions'
import NavBar from '../components/NavBar/NavBar.jsx'
import constants from '../constants'
import './formCreatePokemon.css'


const FormCreatePokemon = () => {

    const types = useSelector(state => state.types)
    const dispatch = useDispatch()

    const [ input, setInput ] = useState({
        name: '',
        img: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: [],
    });

    // console.log(types)

    function submitForm(e){
        e.preventDefault()
            if (!input.name) alert('Title is required');
            else if(!input.img) alert('img is required');
            else if(!input.life) alert('life is required');
            else if(!input.attack) alert('attack is required')
            else if(!input.defense) alert('defense is required')
            else if(!input.speed) alert('speed is required')
            else if(!input.height) alert('height is required')
            else if(!input.weight) alert('weight is required')
            else if(!input.types) alert('types is required')
            else {
                axios.post(`${ constants.POKEMONS_URL }`, input)
                stateReset();
                dispatch( getPokemons() );
                alert('Pokemon Creado!');
            };
    };

    function stateReset(){
        setInput({
            name: '',
            img: '',
            life: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            types: [],
        });
    };

    // agregar poke 
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    const handleSelection = (e) => {
        // hacer un push de cada value al array de mi estado types de pokemon
        e.preventDefault()
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    };
  

    
return (
    <>
        <header><NavBar/></header>
        <div className="pageCreatePokemon">
            <h1 className="nav">Create your Pokemon !</h1>
        <form className="containerCreate" onSubmit={ submitForm }>
            <div className="form-group">
            <>
                <p>
                <label>Name: </label>
                <input type="text" value= { input.name } name="name" placeholder="Enter name" onChange={ handleChange }/>
                </p>

                <p>
                <label>Imagen: </label>
                <input type="text" value= { input.img } name="img" placeholder="Enter img" onChange={ handleChange }/>
                </p>
                
                <p>
                <label>Life </label>
                <input type="range" min="0" max="100" value= { input.life } id="life" name="life" placeholder="Enter life" onChange={ handleChange }/>
                <output type="range" for="life">{ input.life }</output>
                </p>
                
                <p>
                <label>Attack </label>
                <input type="range" min="0" max="100" value= { input.attack } id="attack" name="attack" placeholder="Enter attack" onChange={ handleChange }/>
                <output type="range" for="attack">{ input.attack }</output>
                </p>
                
                <p>
                <label>Defense </label>
                <input type="range" min="0" max="100" value= { input.defense } id="defense" name="defense" placeholder="Enter defense" onChange={ handleChange }/>
                <output type="range" for="defense">{ input.defense }</output>
                </p>
                
                <p>
                <label>Speed </label>
                <input type="range" min="0" max="100" value= { input.speed } id="speed" name="speed" placeholder="Enter speed" onChange={ handleChange }/>
                <output type="range" for="speed">{ input.speed }</output>
                </p>
                
                <p>
                <label>Height </label>
                <input type="range" min="0" max="100" value= { input.height } id="height" name="height" placeholder="Enter height" onChange={ handleChange }/>
                <output type="range" for="height">{ input.height }</output>
                </p>
                
                <p>
                <label>Weight </label>
                <input type="range" min="0" max="100" value= { input.weight } id="weight" name="weight" placeholder="Enter weight" onChange={ handleChange }/>
                <output type="range" for="weight">{ input.weight }</output>
                </p>
                
                <p> Type: {` `} 
                    <select name="type" onChange={handleSelection}>
                        <option defaultValue disabled >select type</option>
                        {
                            types?.map(type => (
                                <option key={type.id} value={type.id} >{type.name}</option>
                                ))
                            }
                    </select>
                </p>
                
                <button type="submit">Submit</button>
            </>
        </div>
        </form>
        </div>
    </>
)
}



export default FormCreatePokemon;