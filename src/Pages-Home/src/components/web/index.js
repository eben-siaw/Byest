import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Header from './header';
import Footer from './footer';
import NotFound from '../nomatch'
import PhonesCategory from './Phones-category';
import DrinksCategory from './drinks-category';
import OutfitsCategory from './outfits-category';
import AppliancesCategory from './appliances-category/appliances';
import CarsCategory from './cars-category';
import Contact from './contact';
import Faq from './customer/faq';
import Term from './customer/term';  
import Desclaimer from './customer/desclaimer';
import Privacypolicy from './customer/privacy-policy';
import Login from '../auth/login';
import Register from '../auth/register';
import Category from './category-mobile'
import Cart from './cart';
import Checkout from './checkout';
import Singleproduct from './singleproduct/index'; 
import Video from './videos-ads/Video';
import AdVideos from './videos-ads/AdVideos';

export default class Main extends Component {
  render() {
      return (
        <main>
          <div className="wrapper">
            <Header/>
            <Switch>
              <Route  exact path='/' component={Home} /> 
              <Route  path='/phones' component={PhonesCategory} />  
              <Route  path="/drinks" component={DrinksCategory} />
              <Route  path='/outfits' component={OutfitsCategory} />
              <Route  path='/cars' component={CarsCategory} /> 
              <Route  path='/appliances' component={AppliancesCategory} />
              <Route  path="/product-details/:id" component={Singleproduct} />
              <Route  path='/contact' component={Contact} />
              <Route  path='/faq' component={Faq} />
              <Route  path='/term-and-condition' component={Term} />
              <Route  path='/desclaimer' component={Desclaimer} />
              <Route  path='/privacy-and-policy' component={Privacypolicy} />
              <Route  path='/login' component={Login} />
              <Route  path='/register' component={Register} />
              <Route  path='/categories' component={Category} />
              <Route  path='/carts' component={Cart} /> 
              <Route  path="/videos" component={AdVideos} /> 
              <Route  path='/checkout/:adminId' component={Checkout} />
            </Switch> 
            <div className="no-display">
            <Footer /> 
            </div>
          </div>  
        </main>
      );
    }
} 

