import React from 'react'; 
import {useState} from 'react';
import Web from './Pages-Home/src/components/web';
import NotFound from './Pages-Home/src/components/nomatch';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'; 

/* Redux Provider */
import { Provider } from 'react-redux';

/* Store from redux*/
import store from './Pages-Home/src/store'; 

const App = () => { 
  

  return ( 
   
    <Provider store={store}> 
      <div className="App">
        <Router>
            <Route path='/' component={Web} />          
            <Route path="/notfound" component={NotFound} />
        </Router>
      </div>
    </Provider> 
   
  );
}

export default App;

