import React from 'react';
import { createRoot }from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

// Cria a raiz
const root = createRoot(container!);

// Renderiza a aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);