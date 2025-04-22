import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='648496686717-hnqu27048c8t9grvbnv40avnu79fd3ie.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>  
  </StrictMode>
);
