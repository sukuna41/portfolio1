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
      className="relative w-full max-w-[380px] h-[420px] xl:max-w-[480px] xl:h-[520px] mx-auto xl:mx-0 mt-6 xl:mt-4 xl:ml-8"
    >
      <Image
        src="/image/webporto1.png"
        alt="Gilang Ramadhan"
        fill
        className="object-cover rounded-lg shadow-xl"
        priority
        quality={100}
        style={{
          objectPosition: "center",
        }}
      />
    </motion.div>
  );
};

export default Photo;
