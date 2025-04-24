// OtpVerificationPage.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpVerificationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [correctOtp] = useState('123456'); // Replace this with backend-generated OTP

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const handleVerify = () => {
    if (otp === correctOtp) {
      navigate('/set-password', { state: { email } });
    } else {
      alert('Incorrect OTP');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Verify OTP</h2>
      <p>Email: <strong>{email}</strong></p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full p-2 border rounded my-3"
      />
      <p className="text-sm text-gray-500 mb-3">Time remaining: {formatTime(timer)}</p>
      <button
        onClick={handleVerify}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
      >
        Verify
      </button>
    </div>
  );
};

export default OtpVerificationPage;
