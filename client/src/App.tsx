import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import { HomePage } from './app/containers/HomePage/Index';
import { PersonPage } from './app/containers/Person/Index';



function App() {
  return (
   <div>
     <Router>
      <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/person" exact >
        <PersonPage />
      </Route>
      </Switch>
     </Router>
   </div>
  );
}

export default App;
