import React from 'react'; 
import {useEffect} from 'react';
import Web from './Pages-Home/src/components/web';
import NotFound from './Pages-Home/src/components/nomatch';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'; 
import ReactGa from 'react-ga'; 

/* Redux Provider */
import { Provider } from 'react-redux';

/* Store from redux*/

const App = () => { 
   
  useEffect(() => {  
    ReactGa.initialize('G-6DQ8E67HDC'); 

    ReactGa.pageview(window.location.pathname + window.location.search);
    
  })

  return ( 
      <div className="App">
        <Router>
          <Web/>          
        </Router>
      </div>
   
  );
}

export default App;

