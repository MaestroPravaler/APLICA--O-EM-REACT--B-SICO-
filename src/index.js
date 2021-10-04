import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Hello from './Hello';
import Clock from './Clock';
import Props from './Props';
import State from './State';
import Clock2 from './Clock2';
import Events from './Events';

ReactDOM.render(
  <React.StrictMode>
    <p>=============================================================</p>
    < Hello / >
    <p>=============================================================</p>
    <Clock />
    <p>=============================================================</p>
    < Props attr = "span"
    attr2 = "Atributo 02"
    attr3 = "Atributo 03" / >
    <p>=============================================================</p>
    <State />
    <p>=============================================================</p>
    <Clock2 />
    <p>=============================================================</p>
    <Events />
    <p>=============================================================</p>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
