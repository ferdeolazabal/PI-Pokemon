import React from 'react'
import Card from '../Card'
import './index.css'

export default function Cards ({ pokemons }) {
    return (
        <div className="cards">
            {
                pokemons?.map(pokemon => 
                    <Card
                        key={pokemon.id}
                        name={pokemon.name}
                        img={pokemon.img}
                        types={pokemon.types}
                    />)
            }
        </div>
    );
};