import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

import { SportFiKitProvider } from 'sportfi-kit';

const config = {
  // Get your free Project ID at https://cloud.reown.com
  reownProjectId: import.meta.env.VITE_REOWN_PROJECT_ID || '',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SportFiKitProvider config={config}>
      <App />
    </SportFiKitProvider>
  </React.StrictMode>,
);
