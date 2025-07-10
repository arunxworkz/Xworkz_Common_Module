import React, { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = ({ setIsLoggedIn }: { setIsLoggedIn: (value: boolean) => void }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        localStorage.setItem('Success', 'true');
        setIsLoggedIn(true); // ✅ Trigger route check
        navigate('/dashboard');
      } else if (response.status === 401) {
        const data = await response.text();
        setErrorMessage(data);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700">Gmail</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="w-full p-2 border rounded-lg mt-1 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute top-3 right-3 text-sm cursor-pointer text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm text-center">{errorMessage}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-sm text-blue-600 hover:underline text-center">
          <Link to="/otpGeneration">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
