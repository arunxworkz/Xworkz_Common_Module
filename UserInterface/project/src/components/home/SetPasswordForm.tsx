import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SetPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('error');

  useEffect(() => {
    if (!email) {
      setMessage("Email not found. Please verify your email first.");
      setMessageType("error");
    }
  }, [email]);

  const validatePassword = (pwd: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/;
    return regex.test(pwd);
  };

  const handleSetPassword = async () => {
    if (!email){
      setMessage("Email is missing. Can not set password")
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    if (!validatePassword(password)) {
      setMessage("Password must include uppercase, lowercase, number, and special character.");
      setMessageType("error");
      return;
    }

    try {
      console.log("Sending to server:", { email, password, confirmPassword });
      const response = await fetch('http://localhost:8080/api/auth/setPassword', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword // ✅ Include confirmPassword as expected by backend DTO
        })
      });

      const data = await response.text();

      if (response.ok) {
        setMessage(data || "Password set successfully");
        setMessageType("success");
        navigate("/signIn"); // ✅ Fix spelling (was `/sigIn`)
      } else {
        setMessage("Failed to set password.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error. Please try again later.");
      setMessageType("error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Set Your Password</h2>

      {email && (
        <input
          type="email"
          value={email}
          readOnly
          className="w-full p-2 border rounded my-2 bg-gray-100"
        />
      )}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded my-2"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full p-2 border rounded my-2"
      />
      <button
        onClick={handleSetPassword}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded mt-3"
      >
        Set Password
      </button>

      {message && (
        <p className={`mt-4 text-center text-sm font-semibold ${messageType === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default SetPasswordPage;
