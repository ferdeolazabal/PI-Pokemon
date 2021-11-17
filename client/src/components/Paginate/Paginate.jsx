import React from 'react';
import './Paginate.css'

export default function Paginate( { pokemonsPerPage, allPokemons, paginate } ) {

    const pageNumbers = [];

    for ( let i = 1; i <= Math.ceil( allPokemons / pokemonsPerPage ); i++ ) {
        pageNumbers.push( i ); 
    }

    return (
        <nav>
            <ul className="pagination">
                { pageNumbers?.map( number => (
                    <li key={ number } className="page-item">
                        <button onClick={ () => paginate( number ) }>
                            { number }
                        </button>
                    </li>
                ) ) }
            </ul>
        </nav>
    );


}