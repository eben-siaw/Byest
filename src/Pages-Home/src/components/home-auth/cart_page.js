import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../web/header';
import Footer from '../web/footer';
import Cart from '../web/cart';

export default class CartPage extends Component {
  render() {
      return (
        <main>
          <div className="wrapper">
            <Header/>
            <Switch>
             <Route  path='/carts' component={Cart} />
            </Switch>
            <Footer/>
          </div> 
        </main>
      );
    }
} 









