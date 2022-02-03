const { REACT_APP_HOST } = process.env;

const constants = {

    POKEMONS_URL: `${REACT_APP_HOST || "http://localhost:3001"}/pokemons`,
    TYPES_URL: `${REACT_APP_HOST || "http://localhost:3001"}/types`,

};

export default constants;