import axios from 'axios';
import constants from '../../constants';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const GET_POKEMONS_DETAIL = 'GET_POKEMONS_DETAIL';
export const POST_POKEMONS = 'POST_POKEMONS';
export const FILTER_POKEMON_BY_NAME = 'FILTER_POKEMON_BY_NAME';
export const FILTER_POKEMON_BY_TYPE = 'FILTER_POKEMON_BY_TYPE';
export const FILTER_POKEMON_BY_SOURCE = 'FILTER_POKEMON_BY_SOURCE';
export const SORT_POKEMON_BY_NAME = 'SORT_POKEMON_BY_NAME';
export const SORT_POKEMON_BY_STRENGTH = 'SORT_POKEMON_BY_STRENGTH';


export function getPokemons () {
    return async function (dispatch) {
        const pokemons = await axios.get( `${ constants.POKEMONS_URL }` );
            return dispatch({
                type: GET_POKEMONS,
                payload: pokemons.data
                });
    };
};

export const getTypes = () => {
    return async (dispatch) => {
        const types = await axios.get( `${ constants.TYPES_URL }` )
        return dispatch({
            type: GET_TYPES,
            payload: types.data
        });
    };
};

