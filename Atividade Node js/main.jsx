// main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 👈 Importa seu componente App
import './index.css'; // 👈 Importa seu CSS

// Garante que o aplicativo React é renderizado no elemento HTML com id='root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
);