import {
    GET_POKEMONS,
    GET_TYPES,
    // GET_POKEMONS_DETAIL,
    // POST_POKEMONS,
    // FILTER_POKEMON_BY_NAME,
    // FILTER_POKEMON_BY_TYPE,
    FILTER_POKEMON_BY_SOURCE,
    // SORT_POKEMON_BY_NAME,
    // SORT_POKEMON_BY_STRENGTH
} from '../actions';



const initialState = {
    pokemons: [],
    filterPokemon: [],
    types: [],
    
};

function rootReducer( state = initialState, { type, payload } ) {
    switch ( type ) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                filterPokemon: payload,
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
        case FILTER_POKEMON_BY_SOURCE:
        const allPokemons = state.filterPokemon;
        const db  = allPokemons.filter(p => p.createdInDb === true);
        const api = allPokemons.filter(p => !p.createdInDb);
            return {
                ...state,
                pokemons: payload === 'db' ? db
                        : payload === 'api' ? api : allPokemons

            };
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

