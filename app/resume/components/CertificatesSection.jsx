import { certificates } from "../data/dataCertificates";
import CertificateCard from "./CertificateCard";

export default function CertificatesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 p-2 lg:grid-cols-3 rounded-lg gap-4">
      {certificates.map((cert) => (
        <CertificateCard key={cert.id} certificate={cert} />
      ))}
    </div>
  );
}
