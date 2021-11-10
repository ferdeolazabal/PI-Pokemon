import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './views/Main.jsx'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons, getTypes } from './redux/actions';
import { Home } from './views/Home';



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

        </Switch>
      </div>
    </Router>
  );
}

export default App;
