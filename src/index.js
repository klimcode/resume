/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/critical.css';
import App from './components/App';


ReactDOM.render(<App />, document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}
