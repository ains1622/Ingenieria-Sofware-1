import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa el componente App desde App.js
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente App */}
  </React.StrictMode>,
  document.getElementById('root')
);
