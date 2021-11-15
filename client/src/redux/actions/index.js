import axios from 'axios';
import constants from '../../constants';

export const GET_POKEMONS             = 'GET_POKEMONS';
export const GET_TYPES                = 'GET_TYPES';
export const GET_POKEMONS_DETAIL      = 'GET_POKEMONS_DETAIL';
export const FILTER_POKEMON_BY_TYPE   = 'FILTER_POKEMON_BY_TYPE';
export const FILTER_POKEMON_BY_SOURCE = 'FILTER_POKEMON_BY_SOURCE';
export const SORT_POKEMONS            = 'SORT_POKEMONS';
// export const POST_POKEMONS            = 'POST_POKEMONS';


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
            console.log(`constants : ${ constants.POKEMONS_URL }/${ id }`);
            const pokemon = await axios.get( `${ constants.POKEMONS_URL }/id/${ id }` );
            return dispatch({
                type: GET_POKEMONS_DETAIL,
                payload: pokemon.data
            });
        };
    };