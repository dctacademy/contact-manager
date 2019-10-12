import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'

function App() {
  return (
    <BrowserRouter>
      <div>
          <Link to="/">Home</Link>
          <Link to="/users/register">Register</Link>
          <Link to="/users/login">Login</Link>


          <Route path="/" component={Home} exact={true} />
          <Route path="/users/register" component={Register} />
          <Route path="/users/login" component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
