import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import Hi from "./Dialogues/Hi";
import d2 from "./Dialogues/d2";
import d3 from "./Dialogues/d3";
import d4 from "./Dialogues/d4";
import d5 from "./Dialogues/d5";
import d6 from "./Dialogues/d6";
import d7 from "./Dialogues/d7";

function App() {
  const [dialogueIndex, setDialogueIndex] = useState(0);

  const dialogues = [Hi, d2, d3, d4, d5, d6, d7];
  const CurrentDialogue = dialogues[dialogueIndex];

  const [isWaving, setWaving] = useState(true);

  const handleNextDialogue = () => {
    setDialogueIndex((prev) => {
      const nextIndex = (prev + 1) % dialogues.length;
      if (nextIndex === 0 || prev === 0) {
        setWaving(!isWaving);
      }
      return nextIndex;
    });
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-linear-to-r from-pink-500 to-purple-500 p-4 text-sm font-bold shadow-lg sm:p-6 sm:text-base md:p-10 md:text-xl">
        <AnimatePresence mode="wait">
          <CurrentDialogue key={dialogueIndex} />
        </AnimatePresence>
        <div className="relative h-50 w-80 sm:mt-12 sm:h-96 md:mt-16 md:h-full md:max-h-136 md:w-full md:max-w-136 lg:mt-20">
          <figure
            id="head"
            className="absolute top-0 left-1/2 z-1 flex h-40 w-40 -translate-x-1/2 flex-col items-center rounded-full border border-pink-500 bg-pink-400 p-6 sm:h-52 sm:w-52 sm:p-8 md:h-64 md:w-64 md:p-12 lg:h-75 lg:w-75"
          >
            <div className="relative top-1 sm:top-2 md:top-4">
              <div id="eyes" className="flex flex-row gap-3 sm:gap-5 md:gap-9">
                <motion.figure
                  animate={{ scaleY: [1, 0.01, 1] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="flex h-14 w-5 origin-center flex-col items-center justify-between rounded-full bg-black p-0.5 sm:h-18 sm:w-6 sm:p-1 md:h-22 md:w-9"
                >
                  <figure className="border-opacity-10 h-6 w-4 rounded-full bg-radial from-white via-white to-black sm:h-8 sm:w-5 md:h-10 md:w-6"></figure>
                  <figure className="h-7 w-4 rounded-b-full bg-linear-to-t from-blue-900 to-black sm:h-10 sm:w-5 md:h-13 md:w-6"></figure>
                </motion.figure>
                <motion.figure
                  animate={{ scaleY: [1, 0.01, 1] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="flex h-14 w-5 flex-col items-center justify-between rounded-full bg-black p-0.5 sm:h-18 sm:w-6 sm:p-1 md:h-22 md:w-9"
                >
                  <figure className="h-6 w-4 rounded-full bg-radial from-white via-white to-black sm:h-8 sm:w-5 md:h-10 md:w-6"></figure>
                  <figure className="h-7 w-4 rounded-b-full bg-linear-to-t from-blue-900 to-black sm:h-10 sm:w-5 md:h-13 md:w-6"></figure>
                </motion.figure>
              </div>
            </div>
            <div id="blush" className="relative top-1 sm:top-1.5 md:top-2">
              <div className="flex flex-row gap-12 sm:gap-20 md:gap-30">
                <figure className="h-4 w-8 rounded-full bg-radial from-rose-500 via-rose-500 to-pink-400 sm:h-5.5 sm:w-11 md:h-7 md:w-14"></figure>
                <figure className="h-4 w-8 rounded-full bg-radial from-rose-500 via-rose-500 to-pink-400 sm:h-5.5 sm:w-11 md:h-7 md:w-14"></figure>
              </div>
            </div>
            <div id="mouth" className="relative">
              <div className="flex flex-row gap-12 sm:gap-20 md:gap-30">
                <figure className="flex h-4 w-6 items-center justify-center overflow-hidden rounded-b-full bg-rose-800 sm:h-5 sm:w-8 md:h-6 md:w-10">
                  <figure className="from-red-00 relative top-1 z-2 h-4 w-4 rounded-full bg-linear-to-t from-red-600 via-red-600 to-rose-800 sm:top-1.5 sm:h-5 sm:w-5 md:top-2 md:h-6 md:w-6"></figure>
                </figure>
              </div>
            </div>
          </figure>
          <div
            id="arms"
            className="absolute top-15 left-1/2 z-0 -translate-x-1/2 sm:top-52 md:top-64 lg:top-75"
          >
            <div className="flex flex-row gap-28 sm:gap-40 md:gap-60">
              <figure className="z-0 h-14 w-12 rotate-55 rounded-b-full border border-pink-500 bg-pink-400 sm:h-18 sm:w-14 md:h-24 md:w-18"></figure>

              <motion.figure
                animate={isWaving ? { rotate: -45 } : { rotate: null }}
                transition={{
                  duration: 0.3,
                  repeat: isWaving ? Infinity : 0,
                  repeatType: "mirror",
                }}
                id="waving-arm"
                className="z-0 h-14 w-12 -rotate-55 rounded-b-full border border-pink-500 bg-pink-400 sm:h-18 sm:w-14 md:h-24 md:w-18"
              />
            </div>
          </div>
          <div
            id="legs"
            className="absolute top-27 left-1/2 -translate-x-1/2 sm:top-72 md:top-96 lg:top-120"
          >
            <div className="flex flex-row gap-6 sm:gap-8 md:gap-12">
              <figure className="z-0 h-20 w-14 rotate-20 rounded-[50%] bg-linear-to-t from-rose-600 via-rose-600 to-black sm:h-24 sm:w-18 md:h-32 md:w-24"></figure>
              <figure className="z-0 h-20 w-14 -rotate-20 rounded-[50%] bg-linear-to-t from-rose-600 via-rose-600 to-black sm:h-24 sm:w-18 md:h-32 md:w-24"></figure>
            </div>
          </div>
        </div>
        <button
          onClick={handleNextDialogue}
          className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-bold text-pink-500 shadow-md transition-colors duration-200 hover:bg-pink-100 sm:mt-6 sm:px-6 sm:py-2.5 sm:text-base md:mt-8 md:px-8 md:py-3 md:text-lg"
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </>
  );
}

export default App;
