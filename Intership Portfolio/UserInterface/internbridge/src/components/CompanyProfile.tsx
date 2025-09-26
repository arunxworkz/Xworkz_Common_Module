import React, { useState } from 'react';
import { Building2, Users, MapPin, User, Globe, Linkedin, Phone, Upload, CheckCircle } from 'lucide-react';
import  axios  from 'axios'; 

interface FormData {
  companyName: string;
  companySize: string;
  companyLogo: File | null;
  companyAddress: string;
  // coAdmin: string;
  website: string;
  linkedin: string;
  telephoneNumber: string;
}

interface FormErrors {
  [key: string]: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    companySize: '',
    companyLogo: null,
    companyAddress: '',
    // coAdmin: '',
    website: '',
    linkedin: '',
    telephoneNumber: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const companySizeOptions = [
    '1-10 employees',
    '11-50 employees', 
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      companyLogo: file
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.companySize) {
      newErrors.companySize = 'Company size is required';
    }

    if (!formData.companyAddress.trim()) {
      newErrors.companyAddress = 'Company address is required';
    }


    if (!formData.website.trim()) {
      newErrors.website = 'Website is required';
    } else if (!/^https?:\/\/.+\..+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid website URL';
    }

    if (formData.telephoneNumber && !/^\+?[\d\s\-\(\)]+$/.test(formData.telephoneNumber)) {
      newErrors.telephoneNumber = 'Please enter a valid telephone number';
    }

    if (formData.linkedin && !/^https?:\/\/(www\.)?linkedin\.com\//.test(formData.linkedin)) {
      newErrors.linkedin = 'Please enter a valid LinkedIn URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (validateForm()) {
    const data = new FormData();

    // Append text fields
    data.append("companyName", formData.companyName);
    data.append("companySize", formData.companySize);
    data.append("companyAddress", formData.companyAddress);
    // data.append("coAdmin", formData.coAdmin);
    data.append("website", formData.website);
    data.append("linkedin", formData.linkedin);
    data.append("telephoneNumber", formData.telephoneNumber);

    // Append file if selected
    if (formData.companyLogo) {
      data.append("companyLogo", formData.companyLogo);
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/company", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Success:", response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
};

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
          <p className="text-gray-600 mb-6">Your company profile has been created successfully.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Create Another Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 relative"
      style={{
        backgroundImage: `url('/InternBridge_Digital_Assets copy.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 via-cyan-600/85 to-blue-700/90"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <img 
                src="/InternBridge_Digital_Assets.jpg" 
                alt="InternBridge Logo" 
                className="w-12 h-12 rounded-lg object-contain bg-white/10 p-1"
              />
              <h1 className="text-4xl font-bold text-white">InternBridge</h1>
            </div>
            <p className="text-xl text-white/90 font-medium">Create Your Company Profile</p>
            <p className="text-white/80 mt-2">Join our platform to connect with talented interns</p>
          </div>

          {/* Form Container */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Grid Layout for Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <Building2 className="w-5 h-5 text-teal-600" />
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      errors.companyName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                    }`}
                    placeholder="Enter your company name"
                  />
                  {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                </div>

                {/* Company Size */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    Company Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      errors.companySize ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                    }`}
                  >
                    <option value="">Select company size</option>
                    {companySizeOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>}
                </div>

                {/* Company Logo */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <Upload className="w-5 h-5 text-teal-600" />
                    Company Logo <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="companyLogo"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition-all"
                    />
                  </div>
                  {formData.companyLogo && (
                    <p className="text-sm text-gray-600 mt-1">Selected: {formData.companyLogo.name}</p>
                  )}
                </div>

                {/* Company Address */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    Company Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none transition-all ${
                      errors.companyAddress ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                    }`}
                    placeholder="Enter your complete company address"
                  />
                  {errors.companyAddress && <p className="text-red-500 text-sm mt-1">{errors.companyAddress}</p>}
                </div>

                {/* Co-Admin */}
                {/* <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <User className="w-5 h-5 text-teal-600" />
                    Co-Admin <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="coAdmin"
                    value={formData.coAdmin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    placeholder="Co-admin name"
                  />
                </div> */}

                {/* Telephone Number */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <Phone className="w-5 h-5 text-teal-600" />
                    Telephone Number <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="telephoneNumber"
                    value={formData.telephoneNumber}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      errors.telephoneNumber ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.telephoneNumber && <p className="text-red-500 text-sm mt-1">{errors.telephoneNumber}</p>}
                </div>

                {/* Website */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <Globe className="w-5 h-5 text-teal-600" />
                    Website <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      errors.website ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                    }`}
                    placeholder="https://www.company.com"
                  />
                  {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
                </div>

                {/* LinkedIn */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <Linkedin className="w-5 h-5 text-teal-600" />
                    LinkedIn <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      errors.linkedin ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                    }`}
                    placeholder="https://www.linkedin.com/company/your-company"
                  />
                  {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300"
                >
                  Create Profile
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-white/80 text-sm">
              By creating a profile, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;