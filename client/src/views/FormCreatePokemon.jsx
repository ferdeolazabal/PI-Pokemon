import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../redux/actions'
import SearchBar from '../components/SearchBar'
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
        <div className="pageCreatePokemon">
            <header><SearchBar/></header>
            <h1 className="nav">Create your Pokemon !</h1>
        <form className="containerCreate" onSubmit={ submitForm }>
            <div className="form-group">
                <label>Name</label>
                <input type="text" value= { input.name } name="name" placeholder="Enter name" onChange={ handleChange }/>

                <label>Imagen</label>
                <input type="text" value= { input.img } name="img" placeholder="Enter img" onChange={ handleChange }/>
                <label>Life</label>
                <input type="number" value= { input.life } id="life" name="life" placeholder="Enter life" onChange={ handleChange }/>
                <label>Attack</label>
                <input type="number" value= { input.attack } id="attack" name="attack" placeholder="Enter attack" onChange={ handleChange }/>
                <label>Defense</label>
                <input type="number" value= { input.defense } id="defense" name="defense" placeholder="Enter defense" onChange={ handleChange }/>
                <label>Speed</label>
                <input type="number" value= { input.speed } id="speed" name="speed" placeholder="Enter speed" onChange={ handleChange }/>
                <label>Height</label>
                <input type="number" value= { input.height } id="height" name="height" placeholder="Enter height" onChange={ handleChange }/>
                <label>Weight</label>
                <input type="number" value= { input.weight } id="weight" name="weight" placeholder="Enter weight" onChange={ handleChange }/>
                <label>Types</label>
                <select name="type" onChange={handleSelection}>
                    <option defaultValue disabled selected >select type</option>
                    {
                        types?.map(type => (
                            <option key={type.id} value={type.id} >{type.name}</option>
                            ))
                        }
                </select>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    )
}



export default FormCreatePokemon;