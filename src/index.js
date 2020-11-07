import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import AdminPage from './S-Admin/src/AdminPage'; 
import NotFound from './Pages-Home/src/components/nomatch';
import AdminDashboard from './S-Admin/src/AdminDashboard';
import { Provider } from 'react-redux';
 
import store from './Pages-Home/src/store'; 
import Web  from './Pages-Home/src/components/web'
import Register from './S-Admin/src/auth/register';
import Customer from './Pages-Home/src/components/home-auth/customer';
import CustRegister from './Pages-Home/src/components/home-auth/custregister';
import CartPage from './Pages-Home/src/components/home-auth/cart_page';
import Reactga from 'react-ga';

const routing = ( 
  <Provider store={store}>  
    <Router>
      <div>
        <Route exact path="/" component={App} />    
        <Route path="/login" component={Customer} /> 
        <Route path="/register" component={CustRegister} /> 
        <Route path="/carts" component={CartPage} />
          {/* Admin Pages  */}
        <Route path="/admin/auth" component={AdminPage} />   
        <Route path="/admin/register" component={Register} /> 
        <Route path="/admin/page" component={AdminDashboard}/>  
        <Route path="/notFound" component={NotFound} />
      </div>
    </Router> 
    </Provider>
  )

ReactDOM.render(routing, document.getElementById('root') 
);
registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

