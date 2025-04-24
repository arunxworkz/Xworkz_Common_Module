import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Signup from './components/home/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import SignIn from './components/home/SignIn';
import OtpGeneration from './components/home/OtpGeneration';
import OtpVerificationPage from './components/home/OtpVerificationPage';
import SetPasswordPage from './components/home/SetPasswordPage';

function App() {
  // Implement smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/otpGeneration" element = {<OtpGeneration/>} />
          <Route path="/verify-otp" element={<OtpVerificationPage />} />
          <Route path="/set-password" element={<SetPasswordPage />} />
        </Routes>  
      </Layout>
    </Router>  
  );
}

export default App;