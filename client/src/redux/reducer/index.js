import {
    GET_POKEMONS,
    GET_TYPES,
    FILTER_POKEMON_BY_TYPE,
    FILTER_POKEMON_BY_SOURCE,
    SORT_POKEMONS,
    GET_POKEMONS_DETAIL,
    // POST_POKEMONS,
    // FILTER_POKEMON_BY_NAME,
    // SORT_POKEMON_BY_STRENGTH
} from '../actions';

const initialState = {
    pokemons: [],
    filterPokemon: [],
    types: [],
    pokemonDetail: [],
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
        case FILTER_POKEMON_BY_SOURCE:
            const allPokemons = state.filterPokemon;
            const db  = allPokemons.filter(p => p.createdInDb === true);
            const api = allPokemons.filter(p => !p.createdInDb);
                return {
                    ...state,
                    pokemons: payload === 'db' ? db
                            : payload === 'api' ? api : allPokemons
                };
        case FILTER_POKEMON_BY_TYPE:
            const totalPokemons = state.filterPokemon;
            const pokemonsByType = totalPokemons.filter(p => p.types);
            const pokemonsByTypeFiltered = pokemonsByType.filter(p => p.types.includes(payload));
            // console.log('totalPokemons',totalPokemons)
            // console.log('pokemonsByType',pokemonsByType)
            // console.log('pokemonsByTypeFiltered',pokemonsByTypeFiltered);
                return {
                    ...state,
                    pokemons:payload === 'all' ? totalPokemons : pokemonsByTypeFiltered,
                };
        case SORT_POKEMONS:
            const pokemons = state.filterPokemon;
            const pokemonsSortedByNameZA = pokemons.filter(p => p.name).sort((a,b) => {
                a = a.name.toUpperCase();
                b = b.name.toUpperCase();
                if ( a > b ) return -1;
                if ( a < b ) return 1;
                return 0;
            });
            const pokemonsSortedByNameAZ = pokemons.filter(p => p.name).sort((a,b) => {
                a = a.name.toUpperCase();
                b = b.name.toUpperCase();
                if ( a < b ) return -1;
                if ( a > b ) return 1;
                return 0;
            });
            const pokemonsSortedByStrengthLH = pokemons.filter(p => p.attack).sort((a,b) => {
                if (a.attack < b.attack) return -1;
                if (a.attack > b.attack) return 1;
                return 0;
            });
            const pokemonsSortedByStrengthHL = pokemons.filter(p => p.attack).sort((a,b) => {
                if (a.attack > b.attack) return -1;
                if (a.attack < b.attack) return 1;
                return 0;
            });
            return {
                ...state,
                pokemons:   payload === 'az' ? pokemonsSortedByNameAZ : 
                            payload === 'za' ? pokemonsSortedByNameZA :
                            payload === 'hl' ? pokemonsSortedByStrengthHL :
                            payload === 'lh' ? pokemonsSortedByStrengthLH : pokemons,
            };
        case GET_POKEMONS_DETAIL:
        console.log( 'payload reducer', payload );
            return {
                    ...state,
                    pokemonDetail: payload,
            };
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

