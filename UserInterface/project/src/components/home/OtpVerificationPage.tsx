import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const OtpVerificationPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(180); // 3 minutes

  useEffect(() => {
    if (!email) {
      alert("Email not found. Please go back and enter your email.");
      navigate('/');
      return;
    }

    // Start countdown timer
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [email, navigate]);

  const handleVerify = async () => {
    if (!otp.trim()) {
      alert("Please enter the OTP.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/verifyOtp", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        alert("OTP Verified Successfully!");
        console.log("Navigating to set-password with:", email);
        navigate('/set-password', { state: { email } });
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert("Server error during verification.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Verify OTP</h2>
      <p className="mb-2">Email: <strong>{email}</strong></p>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-3"
      />

      <p className="text-sm text-gray-500 mb-4">Time remaining: {formatTime(timer)}</p>

      <button
        onClick={handleVerify}
        disabled={timer === 0}
        className={`w-full py-2 rounded text-white ${timer === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        Verify
      </button>
    </div>
  );
};

export default OtpVerificationPage;
