import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import Header from './componentes/Header'
import Main from './componentes/Main'
import Footer from './componentes/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
  document.querySelector('#root')
);
reportWebVitals();
