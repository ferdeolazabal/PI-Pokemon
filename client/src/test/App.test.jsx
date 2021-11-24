// import react from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from "history";
// import ReactDOM from 'react-dom';

import App from '../App.js';
import store from '../redux/store'
import Home from '../views/Home'

// import Main from '../views/Main'
// import FormCreatePokemon from '../views/FormCreatePokemon.jsx';
// import Cards from '../components/Cards/Cards'
// import Card from '../components/Card/Card'

describe('Pokemon App test', () => {
    
    test('renders <Main /> component', () => {

        const component = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        // console.log(component);
        expect(component.container).toHaveTextContent('Come in!');
        
    });

    test( `Gets Landing Page`, () => {
        const history = createMemoryHistory();
        render(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>
        );
        expect(screen.getByText(/Come in!/)).toBeInTheDocument();
    });

    
    test("Renders buttons in <NavBar /> at <Home />  Component", () => {

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/home']}>
                    <Home />
                </MemoryRouter>
            </Provider>
        );
        fireEvent.click(screen.getByText('Home')); // btn execution
        
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Main')).toBeInTheDocument();
        expect(screen.getByText('Create a Pokemon')).toBeInTheDocument();
        expect(screen.getByText('Search')).toBeInTheDocument();
        
    });
    
    test("Renders <NavBar /> at <Home /> Component", () => {

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/home']}>
                    <Home />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.queryByText(/Home/i)).toBeInTheDocument();
        expect(screen.queryByText(/Main/i)).toBeInTheDocument();
        expect(screen.queryByText(/Create a Pokemon/i)).toBeInTheDocument();
        expect(screen.queryByText(/Search/i)).toBeInTheDocument();
        
    });




    // test("Create Pokemon", () => {
    //     const history = createMemoryHistory();
    //     history.push("/pokemoncreate");
    //     render(
    //         <Provider store={store}>
    //             <Router history={history}>
    //             <App />
    //             </Router>
    //         </Provider>
    //     );
    //     // console.log('history',history.createHref)
    //     expect(screen.getByText(/Create your Pokemon !/i)).toBeInTheDocument();
    //     });


    // test('renders <Card /> component', () => {

    //     const pokemon = {
    //         id: 1,
    //         name: 'Bulbasaur',
    //         img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    //         types:['fire', 'flying']
    //     };
    //     const component = render (<Card pokemons={pokemon} />);
    //     console.log(component);
    //     // component.debug();
    //     // component.getByText('Bulbasaur');
    //     // component.getByText('fire');
    //     // component.getByText('dark');
    //     // component.getByText('1');
    //     expect(component.container).toHaveTextContent(pokemon.name);
    // });



    // test(`<Home /> should render a 'Main' && Home && Search && Create a Pokemon button`, async () => {

    //     const component = render(
    //         <Provider store={store}>
    //             <MemoryRouter initialEntries={['/']}>
    //                 <App />
    //             </MemoryRouter>
    //         </Provider>
    //     );
    //     fireEvent.click(screen.getByText('Home'));


    //     expect(screen.getByText('Home')).toBeInTheDocument();
    // });



    // test(' <Home /> should render 9 cards', () => {

    //     const component = render(
    //         <Provider store={store}>
    //             <MemoryRouter initialEntries={['/home']}>
    //                 <App />
    //             </MemoryRouter>
    //         </Provider>
    //     );
    //     console.log(component);
    //     expect(component.container).find( Cards ).toHaveLength(9);

    // });




    // test('renders learn react link', () => {
    //     render.debug('')
    // });





    // test('should render <App /> component', () => {
    //     render(<Provider store={store}>
    //                 <MemoryRouter>
    //                     <App />
    //                 </MemoryRouter>
    //             </Provider>)
        
    // });
        // expect(document.getElementById('root')).toBeInTheDocument();
        // expect(document.getElementById('root')).toBeVisible();
    // test('should render <Main /> component', () => {
    //     render(<Provider store={store}>
    //                 <Router>
    //                     <App />
    //                 </Router>
    //             </Provider>)
    // });
    // test('should render <FormCreatePokemon /> component', () => {

    //     const { getByTestId } = render(<Provider store={store}>
    //                 <Router>
    //                     <FormCreatePokemon />
    //                 </Router>
    //             </Provider>)
    //     expect(getByTestId('form-create-pokemon')).toBeInTheDocument();
        
    // })
    
});
