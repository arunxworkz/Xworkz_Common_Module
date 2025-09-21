// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VerifyCode from './components/VerifyCode'
import SetPassword from './components/SetPassword'
import Demo from './components/Demo'
import SignIn from './components/Signin'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path = "/" element ={<App />} />
            <Route path = "/signup" element ={<SignUp />} />
            <Route path="/verify" element={<VerifyCode />} />
            <Route path="/set-password" element={<SetPassword />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPasseord />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
