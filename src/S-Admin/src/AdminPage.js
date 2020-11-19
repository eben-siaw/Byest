import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import Login from './auth/login'; 
import PasswordReset from './auth/PasswordReset/Reset';
import Register from './auth/register';
import NewPassword from './auth/PasswordReset/NewPassword';

const AdminPage = () => { 
 
    return ( 
 <Router> 
 <Route exact path="/admin/auth" component={Login}/>   
 <Route path="/admin/register" component={Register}/> 
 <Route path="/admin/reset" component={PasswordReset}/>   
 <Route path="admin/reset-pass/:token" component={NewPassword} />
 </Router>
 ); 
} 

export default AdminPage;