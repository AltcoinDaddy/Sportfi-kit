import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

import { SportFiKitProvider } from 'sportfi-kit'

const config = {
  reownProjectId: 'demo', // Using demo ID for examples
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SportFiKitProvider config={config}>
      <App />
    </SportFiKitProvider>
  </StrictMode>,
)
