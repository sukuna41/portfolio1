"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

function CertificateCard({ certificate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative rounded-lg overflow-hidden">
      {/* Efek glow saat hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/15 to-accent-baja/15 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>

      {/* Container utama */}
      <div className="relative h-full bg-gradient-to-tr from-accent-baja/10 via-accent-baja/10 to-accent/10 bg-background border border-accent/30 rounded-lg p-2 transition-all duration-500 group-hover:border-accent/70 group-hover:shadow-lg">
        {/* Gambar sertifikat yang bisa diklik */}
        <div
          className="relative h-96 w-full overflow-hidden rounded-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={certificate.image_url}
            alt={certificate.name}
            fill
            className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-95"
            quality={50}
          />

          {/* Overlay saat hover */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-semibold bg-accent/80 px-4 py-2 rounded-lg">
              Lihat Sertifikat Lengkap
            </span>
          </div>
        </div>

        {/* Modal fullscreen */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none">
            {/* Judul untuk aksesibilitas (disembunyikan secara visual) */}
            <DialogTitle className="sr-only">{certificate.name}</DialogTitle>

            <div className="relative w-full h-full">
              <Image
                src={certificate.image_url}
                alt={certificate.name}
                fill
                className="object-contain"
                quality={100}
              />

              {/* Tombol tutup */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Tutup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default CertificateCard;
