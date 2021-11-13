import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getPokemons, getTypes } from './redux/actions';
import Main from './views/Main.jsx'
import Home from './views/Home';
import FormCreatePokemon from './views/FormCreatePokemon';

import './App.css';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({ type: 'GET_POKEMONS' })
    // dispatch({ type: 'GET_TYPES' })
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

        </Switch>
      </div>
    </Router>
  );
}

export default App;
