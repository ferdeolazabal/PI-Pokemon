//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Type, Pokemon } = require('./src/db.js');  
const { infoTypeApy } = require('./src/Controllers/type'); 
const { getApiPokeList } = require('./src/Controllers/pokemon.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    
    try{
      // const typeList= await infoTypeApy();
      // const foundTypesDB = await Type.findAll({
      //   attributes: ['name']
      // });
      
      // if(foundTypesDB.length === 0){
      //   await Type.bulkCreate(typeList)
      // }

      // const getApiPokeList = await getApiPokeList();
      // const startLoadPokemons = await Pokemon.findAll( { } );

      // if(startLoadPokemons.length === 0){
      //   console.log('startLoadPokemons.length',startLoadPokemons.length);
      //   await Pokemon.bulkCreate(getApiPokeList)
      //   console.log('startLoadPokemons.length',startLoadPokemons);

      // }

    } catch(error) {
      console.error(error);
    }
      console.log('server listening at 3001'); // eslint-disable-line no-console
      console.log('DB connected, Pokemons && types preloaded!');
      // console.log('startLoadPokemons.length(2)',startLoadPokemons);

  });
}); 