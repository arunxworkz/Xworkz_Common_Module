import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Make request to your backend
      const response = await fetch('http://localhost:8080/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setOtpSent(true);
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Try again later.');
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

        {otpSent && (
          <div className="text-green-600 text-sm text-center font-medium">
            OTP has been sent to the respective email.
          </div>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
