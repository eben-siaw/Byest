import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../web/header';
import Footer from '../web/footer';
import Login from '../auth/login';
import Register from '../auth/register';

export default class CustRegister extends Component {
  render() {
      return (
        <main>
          <div className="wrapper">
            <Header/>
            <Switch>
              <Route  path='/login' component={Login} />
              <Route  path='/register' component={Register} />
            </Switch>
            <Footer/>
          </div> 
        </main>
      );
    }
} 
