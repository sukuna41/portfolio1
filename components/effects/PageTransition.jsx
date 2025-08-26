"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: "0",
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
