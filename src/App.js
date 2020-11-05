import React from 'react'; 
import {useState} from 'react';
import Web from './Pages-Home/src/components/web';
import NotFound from './Pages-Home/src/components/nomatch';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'; 

/* Redux Provider */
import { Provider } from 'react-redux';

/* Store from redux*/

const App = () => { 
  

  return ( 
      <div className="App">
        <Router>
          <Web/>          
        </Router>
      </div>
   
  );
}

export default App;

