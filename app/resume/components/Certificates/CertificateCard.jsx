"use client";
import { useState } from "react";
import { ScanSearch } from "lucide-react";
import { IoIosExpand } from "react-icons/io";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

function CertificateCard({ certificate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[0.98] group">
      {/* Outer container with border effect */}

      <div className="relative -inset-0.5 bg-gradient-to-r from-accent/15 to-accent-baja/15 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-300"></div>

      <div className="relative h-full bg-gradient-to-tr from-accent-baja/10 via-accent-baja/10 to-accent/10 bg-background border border-accent/30 rounded-lg p-1 transition-all duration-500 group-hover:border-accent/70 group-hover:shadow-lg">
        {/* Inner container with certificate content */}
        <div className="bg-white dark:bg-primary rounded-lg overflow-hidden">
          {/* Thumbnail Container */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={certificate.image_url}
              alt={certificate.name}
              width={440}
              height={100}
              style={{ objectPosition: "top" }}
              className="certificate-image w-100% h-[260px] lg:h-[270px]  object-cover contrast-110 brightness-90 saturate-110 transition-filter duration-300"
            />

            {/* Hover Overlay */}
            <div
              className="overlay absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 opacity-0 transition-opacity duration-300 cursor-pointer flex items-center justify-center"
              onClick={() => setIsOpen(true)}
            >
              <div className="relative flex flex-col items-center justify-center text-accent text-justify drop-shadow-lg transition-all duration-400 transform translate-y-5">
                <IoIosExpand className="text-4xl" />
                View Certificate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] p-0 overflow-hidden bg-transparent border-none">
          <div className="relative w-auto max-w-[100vw] max-h-[100vh] mx-auto p-0 outline-none">
            {/* Close Button */}
            <div className="absolute top-2 right-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary bg-transparent rounded-lg border-2 border-primary p-2 hover:scale-105 transition-transform duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Image */}
            <Image
              src={certificate.image_url}
              alt={certificate.name}
              width={800}
              height={600}
              className="block max-w-[60vh] max-h-[85vh] sm:max-w-full sm:max-h-[95vh] mx-auto object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CertificateCard;
