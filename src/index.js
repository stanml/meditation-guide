import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
  ), document.querySelector('#root')
);
