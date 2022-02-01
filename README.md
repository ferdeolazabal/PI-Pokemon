<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Pokemon

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>


## Herramientas usadas en el proyecto

  - React, Redux, Css
  - Node y Express.
  - PostgreSQL y Sequelize.
  - Workflow de GIT.
## Idea general

El proyecto consistió en crear una aplicación en la cual se pueden ver los distintos Pokemon utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella se puede, entre otras cosas:

  - Buscar pokemons
  - Filtrarlos / Ordenarlos
  - Crear nuevos pokemons

Para las funcionalidades de filtrado y ordenamiento no se utilizaron los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que fueron realizados mediante Redux.



---------- __Frontend__ ----------


Se desarrolló una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Pagina inicial__: Landing page con
- [ ] Imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__:
- [ ] Input de búsqueda para encontrar pokemons por nombre.
- [ ] Área donde se muestra el listado de pokemons. Al iniciar se cargan los primeros resultados obtenidos desde la ruta `GET /pokemons` mostrando su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
- [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza
- [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina, mostrando los primeros 9 en la primer pagina.


__Ruta de detalle de Pokemon__: contiene
- [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [ ] Estadísticas (vida, fuerza, defensa, velocidad)
- [ ] Altura y peso

__Ruta de creación__: contiene
- [ ] Un formulario __controlado__ con los campos mencionados en el detalle del pokemon
- [ ] Posibilidad de seleccionar/agregar más de un tipo de pokemon
- [ ] Botón/Opción para crear un nuevo pokemon

---------- __Base de datos__ ----------

El modelo de la base de datos contiene las siguientes entidades

- [ ] Pokemon con las siguientes propiedades:
  - ID
  - Nombre
  - Vida
  - Fuerza
  - Defensa
  - Velocidad
  - Altura
  - Peso
- [ ] Tipo con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades es de muchos a muchos ya que un pokemon puede pertenecer a más de un tipo y, a su vez, un tipo puede incluir a muchos pokemons.

---------- __Backend__ ----------

Se desarrolló un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /pokemons__:
  - Obtiene un listado de los pokemons desde pokeapi.
- [ ] __GET /pokemons/{idPokemon}__:
  - Obtiene el detalle de un pokemon en particular
- [ ] __GET /pokemons?name="..."__:
  - Obtiene el pokemon que coincida exactamente con el nombre pasado como query parameter, si no existe ningún pokemon muestra un mensaje adecuado
- [ ] __POST /pokemons__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos
- [ ] __GET /types__:
  - Obtiene todos los tipos de pokemons posibles


## Testing

Se desarrolló Testing en:

- [ ] Componentes proncipales del frontend, con sus tests respectivos.
- [ ] Rutas principales del backend, con sus tests respectivos.
- [ ] Modelo Pokemon de la base de datos, con su test respectivo.
