import { motion } from "motion/react";

const Balloon = ({ text = "" }) => {
  return (
    <motion.div
      id="dialogue"
      className="absolute top-20 left-1/2 -translate-x-1/2 sm:top-10 md:top-15"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <div className="align-center rounded-3 sm:rounded-4 flex h-35 w-60 flex-col items-center justify-center bg-white p-2 text-center text-sm sm:h-24 sm:w-48 sm:text-base md:h-30 md:w-50 md:text-lg">
        {text}
      </div>
      <figure className="relative bottom-5 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 bg-white sm:bottom-6 sm:h-8 sm:w-8 md:bottom-7 md:h-10 md:w-10"></figure>
    </motion.div>
  );
};

export default Balloon;
