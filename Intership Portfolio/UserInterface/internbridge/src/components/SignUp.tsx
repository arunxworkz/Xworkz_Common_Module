import React, { useState } from "react";
import { Mail, ArrowRight, Building2, Target, Users, ShieldCheck, CalendarCheck } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email) return;

    setLoading(true);
    setMessage("");

    try {
        const response = await axios.post("http://localhost:8080/auth/signUp", formData);
        const { status, message } = response.data; // <-- JSON from backend

        if (status === "COMPANY_EXISTS") {
          alert(message);
          navigate("/verify", { state: { email: formData.email, flow: "company_exists" } });
        } else if (status === "NEW_COMPANY") {
          alert(message);
          navigate("/verify", { state: { email: formData.email, flow: "new_company" } });
        } else if (status === "EMPTY_EMAIL" || status === "INVALID_EMAIL" || status === "EMAIL_EXISTS") {
          setMessage(message);
        } else {
          setMessage("Signup failed. Try again.");
        }
      } catch (error: any) {
        console.error("Signup error:", error);
        if (error.response && error.response.data) {
          setMessage(error.response.data);
        } else {
          setMessage("Signup failed. Try again.");
        }
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background with InternBridge logo */}
      <div className="absolute inset-0">
        <img 
          src="/InternBridge_Digital_Assets.jpg" 
          alt="InternBridge Background" 
          className="absolute top-0 right-0 w-1/2 h-auto opacity-10 transform rotate-12"
        />
        <img 
          src="/InternBridge_Digital_Assets.jpg" 
          alt="InternBridge Digital Assets" 
          className="absolute bottom-0 left-0 w-2/3 h-auto opacity-5"
        />
      </div>

      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <img 
              src="/InternBridge_Digital_Assets.jpg" 
              alt="InternBridge Logo" 
              className="w-8 h-8 object-contain rounded-md"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            InternBridge
          </span>
        </div>
      </header>

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Titles */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Build the Future with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Intern Talent</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Unlock a seamless way to recruit, train, and retain the next generation of professionals
              through structured and meaningful internship experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg border border-blue-100">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Smart Recruitment</h3>
                  <p className="text-sm text-gray-600">Find the right interns faster with data-driven selection</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg border border-purple-100">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Skill Development</h3>
                  <p className="text-sm text-gray-600">Provide structured training for real-world growth</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg border border-green-100">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Performance Insights</h3>
                  <p className="text-sm text-gray-600">Track progress with measurable outcomes</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg border border-indigo-100">
                  <CalendarCheck className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Future Workforce</h3>
                  <p className="text-sm text-gray-600">Convert interns into long-term talent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Join Our HR Network</h2>
              <p className="text-gray-600">Get access to top intern candidates today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Corporate Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    required
                    placeholder="hr@company.com"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {message && <p className="text-sm text-red-600 text-center">{message}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{loading ? "Sending OTP..." : "Access Talent Pool"}</span>
                {!loading && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;