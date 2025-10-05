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
import ForgotPassword from './components/ForgotPassword'
import CompanyProfile from './components/CompanyProfile'
import CompanyDetails from './components/CompnayDetails'
import MessageAdmin from './components/MessageAdmin'
import MessageSent from './components/MessageSent'

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
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/company-details/:unique_company_id" element={<CompanyDetails />} />
            <Route path="/message-admin/:compnayUniqueId/:companyName" element={<MessageAdmin />} />
            <Route path="/message-sent" element={<MessageSent />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
