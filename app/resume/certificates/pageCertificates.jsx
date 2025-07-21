import { certificates } from "@/data/certificates";
import CertificateCard from "./components/CertificateCard";

export default function CertificatesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Certificates</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </div>
  );
}
