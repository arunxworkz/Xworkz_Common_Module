// SetPasswordPage.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SetPasswordPage = () => {
  const location = useLocation();
  const email = location.state?.email;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSetPassword = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Send to backend here...
    alert('Password set successfully!');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Set Your Password</h2>
      <input
        type="email"
        value={email}
        readOnly
        className="w-full p-2 border rounded my-2 bg-gray-100"
      />
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
    </div>
  );
};

export default SetPasswordPage;
