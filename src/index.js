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

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} /> 
        <Provider store={store}>  
        <Route path="/admin/auth" component={AdminPage} />  
        <Route path="/admin/page" component={AdminDashboard}/>  
        <Route path="/notFound" component={NotFound} />
        </Provider>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root') 
);
registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

