import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import AdminPage from './S-Admin/src/AdminPage';
import AdminDashboard from './S-Admin/src/AdminDashboard';
 
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/admin/dashboard/auth" component={AdminPage} />  
        <Route path="/admin" component={AdminDashboard}/>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root') 
);
registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

