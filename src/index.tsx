import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './global/styles/_index.scss';
import { ValueProvider } from './state/valueContext/ValueContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ValueProvider>
    <App />
  </ValueProvider>
);
