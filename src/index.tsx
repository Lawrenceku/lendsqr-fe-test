import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/tailwind.css';

import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './utils/ErrorBoundary';
import KickOff from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ErrorBoundary>
      <KickOff />
    </ErrorBoundary>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
