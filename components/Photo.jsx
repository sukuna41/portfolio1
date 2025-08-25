"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = ({ className = "", imgClassName = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.5,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className={`relative ${className}`}
    >
      <Image
        src="/portfolio1/images/profile.png"
        alt="Gilang Ramadhan"
        fill
        className={`object-cover ${imgClassName}`}
        quality={90}
        style={{ objectPosition: "top" }}
      />
    </motion.div>
  );
};

export default Photo;
