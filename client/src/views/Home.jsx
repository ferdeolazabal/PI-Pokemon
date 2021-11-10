import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards'
// import Card from '../components/Card'

import './home.css'


export const Home = () => {

const pokemons = useSelector(state => state.pokemons)

    return (
        <div className='container'>
            <Cards pokemons={ pokemons }/>

            {/* <div className='row'>
            {
                pokemons?.map( pokemon => {
                    return (
                        <>
                            <Card 
                            key={pokemon.id}
                            name={pokemon.name}
                            img={pokemon.img}
                            // types={pokemon.types}
                            />
                        </>
                    )
                })


                


            }
            </div>    */}


        </div>
    )
}
