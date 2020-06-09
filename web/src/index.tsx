// Construção de interface gráfica
import React from 'react';
// React na web - integrado com a "DOM" - Árvore de elementos
import ReactDOM from 'react-dom';
import App from './App';

// Renderize meu app dentro do getElementById - root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);