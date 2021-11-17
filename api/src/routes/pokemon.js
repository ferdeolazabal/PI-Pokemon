const router = require('express').Router();
const { getPokeById, getAllPokemons, getPokeByName, getDbInfo, getPokeList } = require('../Controllers/pokemon')
const { Pokemon, Type } = require('../db')

// [ ] GET /pokemons: OK
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal
// [ ] GET /pokemons?name="...": OK
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado
router.get('/pokemons', async (req, res, next) => {
    
    try {

        const { name } = req.query;
        
        if (!name) {

            const response = await getAllPokemons();
            // const responseDb = await getDbInfo();
            // const responseApi = await getPokeList();
            res.json(response);
            // res.json({ responseApi, responseDb });

        } else {
            const PokeName = await getPokeByName(name);
            res.json(PokeName);
        }

    } catch (error) {
        next(error);
    };
});

// [ ] GET /pokemons/{idPokemon}: OK
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
router.get('/pokemons/id/:id', async (req, res, next) => {

    const { id } = req.params;

    try {
        // busqueda en DB
        if ( isNaN(id) ) {
            const pokemon = await Pokemon.findByPk( id );
            // const pokemon = await Pokemon.findByPk( id, { include: Type } ); 
            
            // pokemon.forEach(poke => {
            //     const pokeInfo = {
            //         id: poke.id,
            //         name: poke.name,
            //         life: poke.life,
            //         attack: poke.attack,
            //         defense: poke.defense,
            //         speed: poke.speed,
            //         height: poke.height,
            //         weight: poke.weight,
            //         img: poke.img,
            //         createdInDb: poke.createdInDb,
            //         types: poke.types.map(type => type.name),
            //     };
            //     res.json(pokeInfo ? pokeInfo : 'No pokemon with that ID');

            res.json(pokemon ? pokemon : 'No pokemon with that ID');
        
        } else {
            // busqueda en API
            const response = await getPokeById(id);
            res.json(response);
        }

    } catch (error) {
        next(error);
    }

});

//  POST /pokemons:   OK!
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos
router.post('/pokemons', async (req, res, next) => {

    const { name, img, life, attack, defense, speed, height, weight, types  } = req.body;

    try {

        const newPokemon = await Pokemon.create({
            name, life, attack, defense, speed, height, weight, img
        });
        await newPokemon.setTypes(types);

		res.json( { newPokemon, types} );

    } catch (error) {
        next(error);
    };
});

module.exports = router;