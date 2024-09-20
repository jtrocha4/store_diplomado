import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DiscountProvider } from './context/discount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DiscountProvider>
      <App />
    </DiscountProvider>
  </StrictMode>
)
