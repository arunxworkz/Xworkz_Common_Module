import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // clear previous error

    try {
      const response = await fetch(`http://localhost:8080/api/auth/getOtp/${email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }), // optional depending on backend
      });

      if (response.ok) {
        alert("OTP has been sent to the respective email.");
        navigate('/verify-otp', { state: { email } });
      } else {
        const errorText = await response.text();
        setError(errorText); // Display the message "Email does not exist"
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 px-4">
      <form
        onSubmit={handleSendOtp}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-xl font-bold text-center text-gray-800">Forgot Password</h2>
        <p className="text-sm text-gray-600 text-center">Enter email to reset password</p>

        <input
          type="email"
          required
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Send OTP
        </button>

        {error && (
          <div className="text-red-600 text-sm text-center font-medium">{error}</div>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
