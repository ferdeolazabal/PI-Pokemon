import {
    GET_POKEMONS,
    GET_TYPES,
    // GET_POKEMONS_DETAIL,
    // POST_POKEMONS,
    // FILTER_POKEMON_BY_NAME,
    // FILTER_POKEMON_BY_TYPE,
    // FILTER_POKEMON_BY_SOURCE,
    // SORT_POKEMON_BY_NAME,
    // SORT_POKEMON_BY_STRENGTH
} from '../actions';



const initialState = {
    pokemons: [],
    allPokemon: [],
    types: [],
    
};

function rootReducer( state = initialState, { type, payload } ) {
    switch ( type ) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                allPokemon: payload,
            };
        case GET_TYPES:
            return {
                ...state,
                types: payload,
            };
        // case GET_POKEMONS_DETAIL:
        //     return {
        //         ...state,
        //         pokemons: payload,
        //     };
        // case POST_POKEMONS:
        //     return {    
        //         ...state,
        //         pokemons: payload,
        //     };
        // case FILTER_POKEMON_BY_NAME:
        //     return {
        //         ...state,
        //         pokemons: payload,
        //     };
        // case FILTER_POKEMON_BY_TYPE:
        //     return {
        //         ...state,
        //         pokemons: payload,
        //     };
        // case FILTER_POKEMON_BY_SOURCE:
        //     return {
        //         ...state,
        //         pokemons: payload,
        //     };
        // case SORT_POKEMON_BY_NAME:
        //     return {
        //         ...state,
        //         pokemons: payload,
        //     };
        // case SORT_POKEMON_BY_STRENGTH:
        //     return {
        //         ...state,
        //         pokemons: payload,
        //     };        
        default:
            return state;
        };
    };

export default rootReducer;

