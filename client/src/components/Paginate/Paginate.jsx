import React from 'react';
import './Paginate.css'

export default function Paginate( { pokemonsPerPage, allPokemons, paginate } ) {

    console.log(pokemonsPerPage, allPokemons, paginate);

    const pageNumbers = [];

    for ( let i = 1; i < Math.ceil( allPokemons / pokemonsPerPage ); i++ ) {
        pageNumbers.push( i ); 
    };

    return (
        <>
            <ul className="pagination">
                { pageNumbers && pageNumbers?.map( number => (
                    <li 
                        className="page-item"
                        key={ number } >

                        <button 
                            className="btn"
                            onClick={ () => paginate( number ) }>
                            { number }
                        </button>
                    </li> ) ) 
                }
            </ul>
        </>
    );
};