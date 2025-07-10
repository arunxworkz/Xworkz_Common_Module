import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Signup from './components/home/Signup';
import SignIn from './components/home/SignIn';
import OtpGeneration from './components/home/OtpGeneration';
import OtpVerificationPage from './components/home/OtpVerificationPage';
import SetPasswordPage from './components/home/SetPasswordPage';
import Dashboard from './components/home/DashBoard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const loginFlag = localStorage.getItem('Success') === 'true';
    setIsLoggedIn(loginFlag);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signIn" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        </Route>

        {/* Auth pages without Layout */}
        <Route path="/otpGeneration" element={<OtpGeneration />} />
        <Route path="/verify-otp" element={<OtpVerificationPage />} />
        <Route path="/set-password" element={<SetPasswordPage />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/dashboard" replace />}
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
