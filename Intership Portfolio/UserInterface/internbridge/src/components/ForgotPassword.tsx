import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/setPassword",
        formData
      );

      if (response.status === 200) {
        alert("Password set successful");
        navigate("/signin");
      }
    } catch (error: any) {
      if (error.response?.status === 404) {
        alert("Password set Unsuccessful");
        navigate("/signup");
      } else {
        alert("Something went wrong. Try again!");
      }
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/InternBridge_Digital_Assets.jpg')",
      }}
    >
      {/* Overlay with gradient theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/70 to-blue-600/70"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white/90 rounded-2xl shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/InternBridge_Digital_Assets.jpg"
            alt="InternBridge Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email address and reset your password below.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <label className="block text-gray-700 mb-1 mt-4">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <label className="block text-gray-700 mb-1 mt-4">Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
          >
            Reset Password
          </button>
        </form>

        {/* Back to login */}
        <p className="mt-6 text-center text-gray-600">
          Remember your password?{" "}
          <a href="/login" className="text-cyan-600 font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
