import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

import { SportFiKitProvider } from 'sportfi-kit';

const config = {
  reownProjectId: '744927b2671542f7d93416e9d6d51a66',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SportFiKitProvider config={config}>
      <App />
    </SportFiKitProvider>
  </React.StrictMode>,
);
