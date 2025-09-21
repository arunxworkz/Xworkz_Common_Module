import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState<string | null>(null);

  // Get email from localStorage when component mounts
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      alert("Email not found. Please verify first.");
      navigate("/verify");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handlePasswordSet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return; // safety check

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/setPassword",
        { email, password }, // send email + password
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.includes("Password set successfully")) {
        alert("Password set successfully! You can now login.");
        localStorage.removeItem("email"); // clear email after use
        navigate("/signIn"); // redirect to login
      }
    } catch (error: any) {
      alert(error.response?.data || "Error setting password");
    }
  };

  if (!email) return null; // render nothing if email not loaded yet

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Set Your Password</h2>
        <form onSubmit={handlePasswordSet} className="space-y-4">
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default SetPassword;
