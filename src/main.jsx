import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ScrollProvider } from './assets/config/ScrollProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>  
  </React.StrictMode>,
)
