import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
//calculate the reverse index for stagged delay
const reverseIndex = (index) => {
  const totalSteps = 8; //number of steps
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* render animasi 
   
   setiap div akan menampilkan animasi dai stairsAnimation Objeck
   delay ssetiap div dinamik dan berbalik dari index
   
   */}
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
