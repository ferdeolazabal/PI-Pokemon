import React from 'react'
import Card from '../Card/Card'
import './Cards.css'

export default function Cards ({ pokemons }) {

    // console.log('pokemons en cards', pokemons)
    return (
        <div className={ pokemons.length < 2 ? "onecard" : "cards" }>
            {
                pokemons?.map(pokemon => 
                    <Card
                        key={pokemon.id}
                        name={pokemon.name}
                        img={pokemon.img}
                        types={ pokemons.types && pokemon.types[0].PokemonType ?
                                pokemon.types.map(type => type.name)  : 
                                pokemon.types }
                        // types={ pokemon.types }
                    />)
            }
        </div>
    );
};