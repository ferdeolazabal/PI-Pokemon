import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getPokemons, getTypes } from './redux/actions';

import Main from './views/Main.jsx'
import Home from './views/Home.jsx';
import FormCreatePokemon from './views/FormCreatePokemon.jsx';
import PokemonDetail from './views/PokemonDetail.jsx';

import './App.css';


export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch( getTypes() );
    dispatch( getPokemons() );
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/home" component={ Home } />
          <Route path="/pokemoncreate" component={ FormCreatePokemon } />
          <Route path="/pokemons/id/:id" component={ PokemonDetail } />
        </Switch>
      </div>
    </Router>
  );
};

