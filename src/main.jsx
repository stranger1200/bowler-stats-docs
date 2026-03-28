import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './styles/global.css';

const rawBase = import.meta.env.BASE_URL.replace(/\/$/, '');
const routerBasename = rawBase === '' ? undefined : rawBase;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={routerBasename}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
