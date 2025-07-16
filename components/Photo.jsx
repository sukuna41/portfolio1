"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      />
      <div className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] mix-blend-lighten">
        <Image
          src="/assets/webprofil.png" // Path langsung dari public/
          alt="Profil Gilang Ramadhan"
          fill // Mengisi container parent
          className="object-contain"
          priority // Prioritaskan loading
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw" // Optimasi responsive
        />
      </div>
    </div>
  );
};

export default Photo;
