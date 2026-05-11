import { motion } from "motion/react";
import { useState } from "react";

function App() {
  const [isForward, setIsForward] = useState(true);
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-r from-pink-500 to-purple-500 p-10 text-4xl font-bold text-white shadow-lg">
        <figure className="z-1 flex h-75 w-75 flex-col items-center rounded-full border border-pink-500 bg-pink-400 p-12">
          <div className="relative top-4">
            <div className="flex flex-row gap-9">
              <figure className="flex h-22 w-9 flex-col items-center justify-between rounded-full bg-black p-1">
                <figure className="border-opacity-10 h-10 w-6 rounded-full bg-white"></figure>
                <figure className="h-13 w-6 rounded-b-full bg-linear-to-t from-blue-900 to-black"></figure>
              </figure>
              <figure className="flex h-22 w-9 flex-col items-center justify-between rounded-full bg-black p-1">
                <figure className="h-10 w-6 rounded-full bg-white"></figure>
                <figure className="h-13 w-6 rounded-b-full bg-linear-to-t from-blue-900 to-black"></figure>
              </figure>
            </div>
          </div>
          <div className="relative top-2">
            <div className="flex flex-row gap-30">
              <figure className="h-7 w-14 rounded-full bg-rose-500"></figure>
              <figure className="h-7 w-14 rounded-full bg-rose-500"></figure>
            </div>
          </div>
          <div className="relative top-3">
            <div className="flex flex-row gap-30">
              <figure className="h-7 w-14 rounded-b-full bg-rose-800"></figure>
            </div>
          </div>
        </figure>
        <div className="absolute top-80 left-1/2 -translate-x-1/2">
          <div className="flex flex-row gap-60">
            <figure className="z-0 h-24 w-18 rotate-55 rounded-b-full border border-pink-500 bg-pink-400"></figure>
            <motion.figure
              animate={{ x: isForward ? 0 : 1, rotate: -45 }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="z-0 h-24 w-18 -rotate-60 rounded-b-full border border-pink-500 bg-pink-400"
            />
          </div>
        </div>
        <div className="absolute top-115 left-1/2 -translate-x-1/2">
          <div className="flex flex-row gap-14">
            <figure className="z-0 h-28 w-24 rotate-20 rounded-b-full border border-rose-500 bg-rose-600"></figure>
            <figure className="z-0 h-28 w-24 -rotate-20 rounded-b-full border border-rose-500 bg-rose-600"></figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
