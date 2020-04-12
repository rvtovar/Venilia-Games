import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import CreateGame from './components/pages/CreateGame'
import EditGame from './components/pages/EditGame'
import GameDashboard from './components/games/GameDashBoard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import NotFound from './components/pages/404'
import NavBar from './components/layout/NavBar'
import Search from './components/pages/Search'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path='/about' />
          <Route component={Search} path='/search' />
          <Route component={CreateGame} path='/create' />
          <Route component={EditGame} path='/games/edit/:id' />
          <Route component={GameDashboard} path='/games/:id' />
          <Route component={SignIn} path='/login' />
          <Route component={SignUp} path='/signup' />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
