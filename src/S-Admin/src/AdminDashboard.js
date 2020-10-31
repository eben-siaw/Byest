import React from 'react';
import {useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
/* theme - material ui  */
import { ThemeProvider } from "@material-ui/core/styles";
import ThemeContext from './context/ThemeContext';
import AdminRoutes from './components/AdminRoutes/OftadehRoutes';
import getTheme from './Admin-configs/themeConfig'; 


const AdminDashboard = () => { 
 
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