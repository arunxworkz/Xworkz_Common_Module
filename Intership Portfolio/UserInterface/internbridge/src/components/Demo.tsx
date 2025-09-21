import React, { useState } from 'react';
import { ArrowRight, Building2, Users, Mail, Phone, User, Briefcase } from 'lucide-react';
import axios from 'axios';

function DemoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    companySize: '',
    jobTitle: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try{
        const response = await axios.post("http://localhost:8080/auth/demo", formData);
        alert(response.data.message || "Demo request submitted successfully! We will Reach you out soon");
        setFormData({
            fullName: '',
            businessEmail: '',
            phoneNumber: '',
            companyName: '',
            companySize: '',
            jobTitle: ''
        });
    }catch(error){
        alert("Something went wrong. Try again.");
    }finally{
        setIsSubmitting(false);
    }
  };

  const companySizes = [
    { value: '', label: 'Select company size' },
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-1000', label: '201-1000 employees' },
    { value: '1000+', label: '1000+ employees' }
  ];

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

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <img 
                src="/InternBridge_Digital_Assets.jpg" 
                alt="InternBridge Logo" 
                className="w-8 h-8 object-contain rounded-md"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">InternBridge</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">← Back to Home</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                See InternBridge in{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Action
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get a personalized demo tailored to your company's internship needs. 
                Discover how InternBridge can transform your talent acquisition strategy.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">What You'll See:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg border border-blue-100">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Smart Recruitment Dashboard</h3>
                    <p className="text-sm text-gray-600">See how to streamline your intern selection process</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg border border-purple-100">
                    <Building2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Program Management Tools</h3>
                    <p className="text-sm text-gray-600">Track progress and manage multiple internship programs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg border border-indigo-100">
                    <Briefcase className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Analytics & Insights</h3>
                    <p className="text-sm text-gray-600">Make data-driven decisions with comprehensive reporting</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-200/50">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">✓ 15-minute personalized demo</span>
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">✓ Custom setup for your needs</span>
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">✓ Q&A with our internship experts</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Demo Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Your Demo</h2>
              <p className="text-gray-600">Fill out the details below and we'll reach out within 24 hours</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="John Smith"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      required
                      placeholder="john@company.com"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      placeholder="Acme Corporation"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Company Size */}
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                    >
                      {companySizes.map((size) => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Job Title */}
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                      placeholder="HR Manager"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4"
              >
                <span>{isSubmitting ? "Requesting Demo..." : "Get My Demo"}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </div>


            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this request, you agree to our privacy policy. We'll never share your information.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DemoPage;