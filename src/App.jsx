import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import Home from './modules/Home';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home}/>
      </BrowserRouter>
    );
  }
}
