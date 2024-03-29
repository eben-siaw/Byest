import React, { useEffect } from 'react';
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
import {NotificationContainer} from 'react-notifications' 
import Video from './Pages-Home/src/components/web/videos-ads/Video';
import VideoPage from './Pages-Home/src/components/home-auth/videos-page';
import PasswordReset from './S-Admin/src/auth/PasswordReset/Reset';
import ChangePassword  from './S-Admin/src/auth/PasswordReset/NewPassword';


const routing = (  
  
  <Provider store={store}>  
    <Router>
      <div>
        <Route exact path="/" component={App} />    
        <Route path="/login" component={Customer} /> 
        <Route path="/register" component={CustRegister} /> 
        <Route path="/carts" component={CartPage} /> 
        <Route path="/videos" component={VideoPage} />
        <Route  path="/videoPlayback/:videoId" component={Video} /> 

          {/* Admin Pages  */}
        <Route path="/admin/auth" component={AdminPage} />   
        <Route path="/admin/register" component={Register} />  
        <Route path="/admin/reset" component={PasswordReset} /> 
        <Route path="/admin/reset-pass/:token" component={ChangePassword} />
        <Route path="/admin/page" component={AdminDashboard}/>  
        <Route path="/notFound" component={NotFound} /> 
        <NotificationContainer/>
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

