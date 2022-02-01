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

});
