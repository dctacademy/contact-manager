import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import { connect } from 'react-redux'

import Home from './components/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import UserAccount from './components/users/Account'
import ContactsList from './components/contacts/List'
import ContactShow from './components/contacts/Show'

function App(props) {
  return (
    <BrowserRouter>
      <div>
          <Link to="/">Home</Link>
          {
            isEmpty(props.user) ? (
              <div>
                <Link to="/users/register">Register</Link>
                <Link to="/users/login">Login</Link>
              </div> 
             ) : ( 
               <div>
                  <Link to="/contacts">Contacts</Link>
                  <Link to="/users/account">Account</Link>
                  <Link to="/users/logout">Logout</Link>
               </div>
             ) 
          }

          
          <Route path="/" component={Home} exact={true} />
          <Route path="/users/register" component={Register} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/account" component={UserAccount} />

          <Route path="/contacts" component={ContactsList} exact={true} />
          <Route path="/contacts/:id" component={ContactShow} />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user 
  }
}
export default connect(mapStateToProps)(App);
