"use client";

import { useState, useEffect } from "react";
import CertificateCard from "@/components/CertificateCard";

export default function CertificateSection() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch("/api/certificates");
        if (!response.ok) {
          throw new Error("Failed to fetch certificates");
        }
        const data = await response.json();
        setCertificates(data);
      } catch (err) {
        console.error("Error fetching certificates:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading certificates...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {certificates.map((cert) => (
        <CertificateCard
          key={cert.id}
          imgSrc={cert.imageUrl}
          title={cert.title}
          date={cert.issuedDate}
        />
      ))}
    </div>
  );
}
