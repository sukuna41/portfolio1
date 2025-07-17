// app/resume/components/CertificatesSection.jsx
"use client";

import { supabase } from "@/lib/supabase";

const CertificatesSection = async () => {
  const { data: certificates } = await supabase
    .from("certificates")
    .select("*");

  const fallbackCerts = [
    {
      id: 1,
      name: "Contoh Sertifikat",
      image_url: "/images/placeholder-cert.png",
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8">Certificates</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {(certificates?.length ? certificates : fallbackCerts).map((cert) => (
          <img
            key={cert.id}
            src={cert.image_url}
            alt={cert.name}
            className="border rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
