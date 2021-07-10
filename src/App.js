import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import NotFound from './pages/NoMatch';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path= "/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route component={NoMatch} /> 
      </Switch>
    </BrowserRouter>
  );
};

export default App;
