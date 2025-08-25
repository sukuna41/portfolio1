"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  console.log("Rendering Photo component");
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
      className="relative w-full max-w-[480px] h-[420px] xl:max-w-full xl:h-[520px] xl:mx-0 mt-6 xl:mt-6 border-2 border-accent"
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
