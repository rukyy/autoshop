import './App.css';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import Detailedpannel from './components/detailedpanel';
import Login from './components/login';
import Signup from './components/signup';

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
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/signup'>
            <Signup/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
