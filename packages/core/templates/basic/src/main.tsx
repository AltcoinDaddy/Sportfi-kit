import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

import { SportFiKitProvider } from 'sportfi-kit'

const config = {
  reownProjectId: '744927b2671542f7d93416e9d6d51a66',
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SportFiKitProvider config={config}>
      <App />
    </SportFiKitProvider>
  </StrictMode>,
)
