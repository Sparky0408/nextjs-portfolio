
import React from "react";
import { CircularText } from "./icons";
import Link from "next/link";

const HireMe = () => {
  return (
   <div className="fixed left-4 bottom-4 
                md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">

  <div className="relative w-48 h-48 md:w-24 md:h-24 flex items-center justify-center">
    
    {/* Rotating Circle Text ONLY */}
    <div className="absolute inset-0 animate-spin-slow [transform-origin:center]">
      <CircularText className="fill-dark dark:fill-light" />
    </div>

    {/* Static Center Button */}
    <a
      href="mailto:ruturajrs20@gmail.com"
      className="absolute left-1/2 top-1/2
                 -translate-x-1/2 -translate-y-1/2
                 bg-dark text-light shadow-md
                 border border-dark w-20 h-20
                 md:w-12 md:h-12 md:text-[10px]
                 rounded-full font-semibold
                 flex items-center justify-center
                 hover:bg-light hover:text-dark
                 dark:bg-light dark:text-dark
                 hover:dark:bg-dark hover:dark:text-light"
    >
      Hire Me
    </a>

  </div>
</div>


  );
};

export default HireMe;
