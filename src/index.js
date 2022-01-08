import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './componentes/Header'
import Main from './componentes/Main'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>,
  document.querySelector('#root')
);
reportWebVitals();
