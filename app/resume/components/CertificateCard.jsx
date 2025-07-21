"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function CertificateCard({ certificate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-200"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={certificate.image_url}
          alt={certificate.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          quality={50} // Gambar thumbnail (kualitas rendah)
        />
      </div>

      {/* Modal Fullscreen */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none">
          <div className="relative w-full h-full">
            <Image
              src={certificate.image_url}
              alt={certificate.name}
              fill
              className="object-contain"
              quality={100} // Gambar full quality
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
