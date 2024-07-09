import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

export const Setting = {
  offerCardCount: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCardCount={Setting.offerCardCount} />
  </React.StrictMode>
);
