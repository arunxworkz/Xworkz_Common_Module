// src/pages/CompanyDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface CompanyDetails {
  id: number;
  compnayUniqueId: string,
  companyName: string;
  companySize: string;
  companyLogo?: string;  // URL for logo
  companyTelephoneNumber: string;
  companyWebsite: string;
  companyLinkedin: string;
  admin: string;
  companyDomain: string;
}

const CompanyDetails: React.FC = () => {
  const { unique_company_id } = useParams<{ unique_company_id: string }>(); // e.g. /company-details/123
  const [company, setCompany] = useState<CompanyDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(unique_company_id)

  useEffect(() => {
    const fetchCompany = async () => {
      if (unique_company_id == null) {
        setError("Invalid company ID");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/auth/company-details/${unique_company_id}`
        );

        if (response.data) {
          const data = response.data;
          setCompany({
          id: data.id,
          compnayUniqueId:data.unique_company_id,
          companyName: data.company_name,
          companySize: data.company_size,
          companyLogo: data.company_logo,
          companyTelephoneNumber: data.company_telephone_number,
          companyWebsite: data.company_website,
          companyLinkedin: data.company_linkedin,
          admin: data.admin,  // right now it's ID
          companyDomain: data.company_domain
        });
        } else {
          setError("Company not found");
        }
      } catch (error) {
        console.error("Error fetching company:", error);
        setError("Failed to fetch company details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [unique_company_id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
          <p className="text-white mt-4 text-lg font-medium">Loading company details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl max-w-md">
          <p className="text-white text-center text-lg">{error}</p>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl max-w-md">
          <p className="text-white text-center text-lg">No company details found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-teal-500/30 to-cyan-500/30 p-8 text-center">
            {company.companyLogo && (
              <div className="flex justify-center mb-6">
                <div className="bg-white rounded-3xl p-4 shadow-xl">
                  <img
                    src={company.companyLogo}
                    alt={`${company.companyName} logo`}
                    className="h-32 w-32 object-contain"
                  />
                </div>
              </div>
            )}
            <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
              {company.companyName}
            </h1>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
              <p className="text-white font-medium">Admin: {company.admin}</p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Company Size */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-teal-400 rounded-xl p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-sm font-medium">Company Size</p>
                <p className="text-white text-xl font-bold">{company.companySize}</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-teal-400 rounded-xl p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-sm font-medium">Phone</p>
                <p className="text-white text-lg font-semibold">{company.companyTelephoneNumber}</p>
              </div>
            </div>
          </div>

          {/* Website */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-teal-400 rounded-xl p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/70 text-sm font-medium">Website</p>
                <a
                  href={company.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-semibold hover:text-teal-200 transition-colors truncate block"
                >
                  {company.companyWebsite}
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-teal-400 rounded-xl p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/70 text-sm font-medium">LinkedIn</p>
                <a
                  href={company.companyLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-semibold hover:text-teal-200 transition-colors truncate block"
                >
                  {company.companyLinkedin}
                </a>
              </div>
            </div>
          </div>

          {/* Domain */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all md:col-span-2">
            <div className="flex items-center space-x-4">
              <div className="bg-teal-400 rounded-xl p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-sm font-medium">Company Domain</p>
                <p className="text-white text-xl font-bold">{company.companyDomain}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Admin Button */}
        <div className="mt-8 flex justify-center">
          <a
            href={`/message-admin/${company.compnayUniqueId}/${company.companyName}`}
            className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span>Message Admin</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;