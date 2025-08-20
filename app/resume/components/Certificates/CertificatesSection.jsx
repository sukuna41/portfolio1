import { certificates } from "../../data/dataCertificates";
import CertificateCard from "./CertificateCard";

export default function CertificatesPage() {
  return (
    <div className="pb-10 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 rounded-lg gap-6">
      {certificates.map((cert) => (
        <CertificateCard key={cert.id} certificate={cert} />
      ))}
    </div>
  );
}
