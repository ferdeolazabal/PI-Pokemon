import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getPokemons, getTypes } from './redux/actions';

import Main from './views/Main.jsx'
import Home from './views/Home.jsx';
import FormCreatePokemon from './views/FormCreatePokemon.jsx';
import PokemonDetail from './views/PokemonDetail.jsx';

import './App.css';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch( getPokemons() );
    dispatch( getTypes() );
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
}

export default App;
