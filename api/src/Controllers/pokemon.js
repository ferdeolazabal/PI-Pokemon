const axios = require('axios');
const { Pokemon, Type } = require('../db')

// Lista Pokemons desde api
const getPokeList = async () => {
    
    const ttlPoke = 3;    
    
    try {
        const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${ ttlPoke }`); // obj con name, url
        const resApiResults  = await apiUrl.data.results.map(obj => axios.get(obj.url));
        const infoUrlPoke = await axios.all(resApiResults); // proms resuelta
        const fullDataPokemons = infoUrlPoke.map(obj => obj.data);
        const infoPokemons = fullDataPokemons.map(poke => {
            return {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.other.dream_world.front_default,
                life: poke.stats[0].base_stat,
                attack: poke.stats[1].base_stat,
                defense: poke.stats[2].base_stat,
                speed: poke.stats[5].base_stat,
                height: poke.height,
                weight: poke.weight,
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

        for(var i = 0; i < pokemons.length; i++){
            let poke = pokemons[i];
            let pokeObj = {
                id: poke.id,
                name: poke.name,
                img: poke.img,
                life: poke.life,
                attack: poke.attack,
                defense: poke.defense,
                speed: poke.speed,
                height: poke.height,
                weight: poke.weight,
                createdInDb: poke.createdInDb,
            };
            // console.log("poke.types",poke.types)
            // if(poke.types.length === 1) pokeObj.types = [ poke.types[0].name];
            // else pokeObj.types = [ poke.types[0].name, poke.types[1].name];
            pokeArray.push(pokeObj);
        }
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

    return totalPokemons;
}

// Lista Pokemons desde API y DB por nombre
const getPokeByName = async (name) => {

    const pokeList = await getAllPokemons();
    const pokeByName = pokeList.filter(poke => poke.name === name);
    
    return pokeByName;
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

module.exports = {
    getPokeList,
    getPokeById, 
    getDbInfo,
    getAllPokemons,
    getPokeByName
};