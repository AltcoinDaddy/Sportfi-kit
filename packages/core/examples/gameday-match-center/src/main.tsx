import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

import { SportFiKitProvider } from 'sportfi-kit'

const config = {
  // Get your free Project ID at https://cloud.reown.com
  reownProjectId: import.meta.env.VITE_REOWN_PROJECT_ID || '',
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SportFiKitProvider config={config}>
      <App />
    </SportFiKitProvider>
  </StrictMode>,
)
