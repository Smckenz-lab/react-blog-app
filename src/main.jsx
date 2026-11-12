//Updated and changed this so program could work//

//Added//
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router';
import { ThemeProvider } from './Pages/Theme'


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
