const axios = require('axios');
const { Pokemon, Type } = require('../db')


// Lista Pokemons desde api
const getPokeList = async () => {

    try {
        const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=3`); // obj con name, url
        const resApiResults  = await apiUrl.data.results.map(obj => axios.get(obj.url));
        const infoUrlPoke = await axios.all(resApiResults); // proms resuelta
        const fullDataPokemons = infoUrlPoke.map(obj => obj.data);
        const infoPokemons = fullDataPokemons.map(poke => {
            return {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.other.dream_world.front_default,
                types: poke.types.map(type => type.type.name),
            };
        });
            return infoPokemons;

    } catch (err) {
        console.log(err);
        return err
    };
};
// Lista Pokemons desde api por ID
const getPokeById = async (id) => {

    try{
        const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const infoPoke = apiUrl.data;
        const pokeDetail = {
            id: infoPoke.id,
            name: infoPoke.name,
            life: infoPoke.stats[0].base_stat,
            attack: infoPoke.stats[1].base_stat,
            defense: infoPoke.stats[2].base_stat,
            speed: infoPoke.stats[5].base_stat,
            height: infoPoke.height,
            weight: infoPoke.weight,
            img: infoPoke.sprites.other.dream_world.front_default,
            types: infoPoke.types.map(type => type.type.name),
        };
        return pokeDetail;

    } catch (err) {
        console.log(err);
        return err
    };
};
// Lista Pokemons desde DB
const getDbInfo = async () => {
    
    return await Pokemon.findAll({

        include: {
            model: Type,
            atributes: ["Type"],
            throught: {
                atributes: [],
            },
        },
    });
    
};
// lista Pokemons desde API y DB
const getAllPokemons = async () => {

    const apiInfo = await getPokeList();
    const dbInfo = await getDbInfo();
    const totalPokemons = [ ...apiInfo, ...dbInfo ];

    return totalPokemons;
}

const getPokeByName = async (name) => {

    // await Pokemon.findOne({
    //     where: { name },
    //     include: { model: Type }
    // });

    const pokeList = await getAllPokemons();
    const pokeByName = pokeList.filter(poke => poke.name === name);
    
    return pokeByName;
};

module.exports = {
    getPokeList,
    getPokeById, 
    getDbInfo,
    getAllPokemons,
    getPokeByName
};