import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
const GOOGLE_CLIENT_ID = import.meta.env.VITE_REACT_APP_GOOGLECLIENTID || "";

ReactDOM.render( // Usa ReactDOM.render en lugar de ReactDOM.createRoot
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root') // Usa document.getElementById('root') directamente
);