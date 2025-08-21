import { certificates } from "../../data/dataCertificates";
import CertificateCard from "./CertificateCard";

export default function CertificatesSection() {
  return (
    <div className="pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </div>
  );
}
