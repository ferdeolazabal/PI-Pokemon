import axios from 'axios';
import constants from '../../constants';

export const GET_POKEMONS             = 'GET_POKEMONS';
export const GET_TYPES                = 'GET_TYPES';
export const GET_POKEMONS_DETAIL      = 'GET_POKEMONS_DETAIL';
export const FILTER_POKEMON_BY_TYPE   = 'FILTER_POKEMON_BY_TYPE';
export const FILTER_POKEMON_BY_SOURCE = 'FILTER_POKEMON_BY_SOURCE';
export const SORT_POKEMONS            = 'SORT_POKEMONS';
export const GET_POKEMON_BY_NAME      = 'GET_POKEMON_BY_NAME';
export const NEW_POKEMON              = 'NEW_POKEMON';

export function getPokemons () {

    return async function (dispatch) {
    
        try {
    
            const pokemons = await axios.get( `${ constants.POKEMONS_URL }` );
            return dispatch({
                type: GET_POKEMONS,
                payload: pokemons.data
                });
    
        } catch (error) {
            
            console.log(error);
        }
    };
};

export const getTypes = () => {

    return async (dispatch) => {
    
    try {
    
            const types = await axios.get( `${ constants.TYPES_URL }` )
        return dispatch({
            type: GET_TYPES,
            payload: types.data
        });
    
    } catch (error) {
    
        console.log(error);
        };
    };
};

export function newPokemon(data) {
    return async function (dispatch) {
        try {
            const response = await axios.post(`${ constants.POKEMONS_URL }`, data);
            dispatch({
                type: NEW_POKEMON,
                payload: response.data,
            });
        } catch (error) {
            console.log(error.response);
        }
    };
}

export const getSource = ( payload ) => {   

    return {
        type: FILTER_POKEMON_BY_SOURCE,
        payload
    };
};

export const getFilterType = ( payload ) => {
    
    return {
        type: FILTER_POKEMON_BY_TYPE,
        payload
    };
};

export const sortPokemons = ( payload ) => {

    return {
        type: SORT_POKEMONS,
        payload
    };
};

export const getPokemonDetail = ( id ) => {

    return async (dispatch) => {
        const pokemon = await axios.get( `${ constants.POKEMONS_URL }/id/${ id }` );
        return dispatch({
            type: GET_POKEMONS_DETAIL,
            payload: pokemon.data
        });
    };
};

export const getPokemonName = (name) => {

    return async (dispatch) => {
        try {
            const pokemonName = await axios(`http://localhost:3001/pokemons?name=${name}`);
            const pokeArray = [];
            pokeArray.push(pokemonName.data);
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: pokeArray
            });
        } catch (error) {
            console.log(error)
        };
    };
};