import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};
  const [code, setCode] = useState("");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/verifyCode", null, {
        params: { email, code }
      });

      if (response.data.includes("Email verified")) {
        alert("Email verified successfully!");
        navigate("/set-password", { state: { email } });
      }
    } catch (error: any) {
      alert(error.response?.data || "Invalid code. Please try again.");
      navigate("/signup"); // redirect to signup if invalid
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Verify Email</h2>
        <p className="text-gray-600 mb-6">
          Enter the code we sent to <b>{email}</b>
        </p>
        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyCode;
