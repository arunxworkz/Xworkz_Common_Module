// src/pages/CompanyDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface CompanyDetails {
  id: number;
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
  const { id } = useParams<{ id: string }>(); // e.g. /company-details/123
  const [company, setCompany] = useState<CompanyDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/auth/company/${id}`);
        setCompany(response.data);
      } catch (error) {
        console.error("Error fetching company:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [id]);

  if (loading) return <p className="text-center mt-6">Loading company details...</p>;
  if (!company) return <p className="text-center mt-6">No company details found.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 shadow-lg rounded-2xl bg-white">
      {company.companyLogo && (
        <div className="flex justify-center mb-4">
          <img
            src={company.companyLogo}
            alt={`${company.companyName} logo`}
            className="h-24 w-24 rounded-full object-cover border"
          />
        </div>
      )}

      <h1 className="text-2xl font-bold text-center mb-2">{company.companyName}</h1>
      <p className="text-center text-gray-600 mb-6">Admin: {company.admin}</p>

      <div className="space-y-3">
        <p><strong>Size:</strong> {company.companySize}</p>
        <p><strong>Phone:</strong> {company.companyTelephoneNumber}</p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={company.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {company.companyWebsite}
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href={company.companyLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {company.companyLinkedin}
          </a>
        </p>
        <p><strong>Domain:</strong> {company.companyDomain}</p>
      </div>
    </div>
  );
};

export default CompanyDetails;
