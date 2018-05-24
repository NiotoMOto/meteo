import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import style from '../style/main.scss';

const title = 'Ici on apprend le react';

ReactDOM.render(
  <App/>,
  document.body
);

module.hot.accept();