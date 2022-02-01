import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyle } from './styles/global';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />

    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
s;
