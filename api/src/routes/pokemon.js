const { Router } = require('express');
const router = Router();
const { getPokeList, getPokeById } = require('../Controllers/pokemon')
const { Pokemon, Type } = require('../db')

router.get('/pokemons', async (req, res, next) => {
    
    try {
        const response = await getPokeList();
        res.json(response);
    } catch (error) {
        next(error);
    };
});

router.get('/pokemons/:id', async (req, res, next) => {

    const { id } = req.params;

    try {
        const response = await getPokeById(id);
        res.json(response);
    } catch (error) {
        next(error);
    }

});

//  POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos

router.post('/pokemons', async (req, res, next) => {

    const { id, name, img, life, attack, defense, speed, height, weight, types } = req.body;

    try {
        const createPoke = await Pokemon.create(id, name, img, life, attack, defense, speed, height, weight, types);

        console.log(createPoke);
        res.json(createPoke);
    } catch (error) {
        // res.send('No se pudo crear el pokemon, revise que no falten parametros obligatorios');
        res.send(error);
    };
});

module.exports = router;


// get('/pokemons', (req, res) => {
    // let {name} = req.query;
    // https://pokeapi.co/api/v2/pokemon/{name} + la consulta a mi db para ver si tengo el mismo pokemons para
// })

//  GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
//  GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado

