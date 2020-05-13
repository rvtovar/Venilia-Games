import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import CreateGame from './components/pages/CreateGame'
import EditGame from './components/pages/EditGame'
import Game from './components/pages/Game'
import Search from './components/pages/Search'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import NotFound from './components/pages/404'
import CreateChar from './components/pages/CreateChar'
import NavBar from './components/layout/NavBar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path='/about' />
          <Route component={CreateGame} path='/create' />
          <Route component={CreateChar} path='/newChar' />
          <Route component={EditGame} path='/games/edit/:id' />
          <Route component={Game} path='/games/:id' />
          <Route component={Search} path='/search' />
          <Route component={SignIn} path='/login' />
          <Route component={SignUp} path='/signup' />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
