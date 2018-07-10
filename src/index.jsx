import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import style from '../style/main.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

module.hot.accept();
