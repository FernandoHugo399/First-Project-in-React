import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './componentes/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
  document.querySelector('#root')
);
reportWebVitals();
