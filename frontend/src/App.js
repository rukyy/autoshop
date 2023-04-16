import './App.css';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import Detailedpannel from './components/detailedpanel';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/cars/:id'>
            <Detailedpannel/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
