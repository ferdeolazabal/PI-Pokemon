const axios = require('axios');
const { Pokemon, Type } = require('../db')

// Lista Pokemons desde api
const getPokeList = async () => {
    
    const ttlPoke = 40;
    
    try {
        const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${ ttlPoke }`); // obj con name, url
        const resApiResults  = await apiUrl.data.results.map(obj => axios.get(obj.url));
        const infoUrlPoke = await axios.all(resApiResults); // proms resuelta
        const fullDataPokemons = infoUrlPoke.map(obj => obj.data);
        const infoPokemons = fullDataPokemons.map(poke => {
            return {
                id: poke.id,
                name: poke.name,
                life: poke.stats[0].base_stat,
                attack: poke.stats[1].base_stat,
                defense: poke.stats[2].base_stat,
                speed: poke.stats[5].base_stat,
                height: poke.height,
                weight: poke.weight,
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

// Lista Pokemons desde la DB
const getDbInfo = async () => {

    let pokeArray = [];
    
    try {
        const pokemons = await Pokemon.findAll({
            include: { model: Type },
        });
        // console.log('pokemons ', pokemons);
        pokemons.forEach(poke => {
            const pokeInfo = {
                id: poke.id,
                name: poke.name,
                life: poke.life,
                attack: poke.attack,
                defense: poke.defense,
                speed: poke.speed,
                height: poke.height,
                weight: poke.weight,
                img: poke.img,
                createdInDb: poke.createdInDb,
                types: poke.types.map(type => type.name),
            };
            pokeArray.push(pokeInfo);
        });
        return pokeArray;
        
        
    } catch (err) {
        console.log(err);
        return err
    };
};

// lista Pokemons desde API y DB
const getAllPokemons = async () => {

    const apiInfo = await getPokeList();
    const dbInfo = await getDbInfo();
    const totalPokemons = [ ...apiInfo, ...dbInfo ];
    // const totalPokemons = [ ...apiInfo ]

    return totalPokemons;
}

// Lista Pokemons desde API y DB por nombre
const getPokeByName = async (name) => {
    try {
        const searchPokeNameDB = await Pokemon.findOne({
            where: { name },            //encuentra primera coincidencia
            include: { model: Type }
        })
        if (searchPokeNameDB) {
            let pokedbName = {
                id: searchPokeNameDB.id,
                name: searchPokeNameDB.name,
                life: searchPokeNameDB.life,
                attack: searchPokeNameDB.attack,
                defense: searchPokeNameDB.defense,
                speed: searchPokeNameDB.speed,
                height: searchPokeNameDB.height,
                weight: searchPokeNameDB.weight,
                sprite: searchPokeNameDB.sprite,
                types: searchPokeNameDB.types.length < 2 ? [searchPokeNameDB.types[0]] : [searchPokeNameDB.types[0], searchPokeNameDB.types[1]]
            }
            return pokedbName;
        }else {
            const searchPokeapiName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);       //obtengo el pokemon de la url/name
            const foundPokeapiName = objPokeApi(searchPokeapiName.data);
            // console.log('foundPokeapi', foundPokeapiName)
            return foundPokeapiName
        }
    } catch (error) {
        console.log(error);
        return error;
    }
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

const objPokeApi = (poke) => {
    const objPokeapi =
    {
        id: poke.id,
        name: poke.name,
        life: poke.stats[0].base_stat,
        attack: poke.stats[1].base_stat,
        defense: poke.stats[2].base_stat,
        speed: poke.stats[5].base_stat,
        height: poke.height,
        weight: poke.weight,
        img: poke.sprites.other.dream_world.front_default,
        types: poke.types.map(type => type.type.name)
    };
    return objPokeapi
};

module.exports = {
    getPokeList,
    getPokeById, 
    getDbInfo,
    getAllPokemons,
    getPokeByName
};