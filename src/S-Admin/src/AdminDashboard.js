import React, { useEffect } from 'react';
import {useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
/* theme - material ui  */
import { ThemeProvider } from "@material-ui/core/styles";
import ThemeContext from './context/ThemeContext';
import AdminRoutes from './components/AdminRoutes/OftadehRoutes';
import getTheme from './Admin-configs/themeConfig'; 
import jwtdecode from 'jwt-decode'; 
import {useDispatch} from 'react-redux';
import {SetCurrentAdmin, isAuth} from './actions/authActions'

const AdminDashboard = () => { 
  
 const dispatch = useDispatch();

 useEffect(() => { 
   
   const admintoken = localStorage.admintoken;  
   if(!admintoken) { 
      window.location = "/admin/auth";
   }
   const decoded = jwtdecode(admintoken);
   dispatch(SetCurrentAdmin(decoded)); 
   dispatch(isAuth(true)); 
 })

 const curThemeName = localStorage.getItem("appTheme") || "light";

 const [themeType, setThemeType] = useState(curThemeName);
  
 const setThemeName = themeName => {
 localStorage.setItem("appTheme", themeName);
 setThemeType(themeName);
 };
  
 const theme = getTheme({
 paletteType: themeType
 });

 return ( 
 
    <ThemeContext.Provider value={{ setThemeName, curThemeName }}>
     <ThemeProvider theme={theme}> 
     <div className="dashboard">   
     <Router> 
     <AdminRoutes/>   
     </Router>
     </div>
     </ThemeProvider> 
    </ThemeContext.Provider>
    
 );

} 

export default AdminDashboard;