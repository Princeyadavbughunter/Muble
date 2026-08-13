import React from 'react'
import ReactDOM from 'react-dom/client'

// base first: tokens and utilities must sit underneath the component layers,
// otherwise .btn/.eyebrow win against the rules meant to override them
import './styles/base.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
