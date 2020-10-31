import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import Login from './auth/login'; 
import Register from './auth/register';

const AdminPage = () => { 
 
    return ( 
 <Router> 
 <Route exact path="/admin/auth" component={Login}/>  
 <Route path="/admin/register" component={Register}/> 
 
 </Router>
 ); 
} 

export default AdminPage;