import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
