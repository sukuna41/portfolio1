"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.5, // Delay untuk sinkronisasi
          duration: 1,
          ease: [0.22, 1, 0.36, 1], // Kurva easing premium
        },
      }}
      className="relative w-full max-w-[480px] h-[420px] xl:max-w-full xl:h-[520px] xl:mx-0 mt-6 xl:mt-6 border border-accent"
    >
      <Image
        src="/image/profile.png"
        alt="Gilang Ramadhan"
        fill
        className="object-cover"
        quality={100}
        style={{
          objectPosition: "center",
        }}
      />
    </motion.div>
  );
};

export default Photo;
