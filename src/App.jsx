import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import Home from './modules/Home';
import Place from './modules/Place';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/place" component={Place} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
