import React from 'react';
import Home from './modules/Home';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home}/>
      </BrowserRouter>
    );
  }
}
