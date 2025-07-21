// app/resume/components/CertificatesSection.jsx
"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function CertificatesSection() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .order("issued_date", { ascending: false });

      if (!error) setCertificates(data);
      setLoading(false);
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] bg-gray-200 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-200"
            onClick={() => setSelectedCert(cert)}
          >
            <Image
              src={cert.image_url}
              alt={cert.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              quality={50}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedCert}
        onOpenChange={(open) => !open && setSelectedCert(null)}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none">
          {selectedCert && (
            <div className="relative w-full h-full">
              <Image
                src={selectedCert.image_url}
                alt={selectedCert.name}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
