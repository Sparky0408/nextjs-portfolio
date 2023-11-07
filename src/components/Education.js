'use client';
import React, { useRef } from "react";


import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg ">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75  dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-mediium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px] "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            type="PG-Diploma Centre for Development of Advanced Computing (C-DAC)"
            time="2023 March - August 2023"
            place="CDAC Acts, Pune "
            info="Object Oriented Programming with Java, Algorithms and Data Structures (Using Java), Database Technologies, Web Programming Technologies
            Web-based Java Programming, Microsoft .Net Technologies"
          />
          <Details
            type="Bachelor of Technology (B.tech) Mechanical Engineering"
            time="2019 - 2022"
            place="MGM's College of Engineering, Nanded"
            info="Solid mechanics, Fluid mechanics, Manufacturing processes, Engineering thermodynamics,  Heat and mass transfer, CAD and finite element analysis"
          />
          <Details
            type="Diploma Mechanical"
            time="2016 - 2019"
            place="Govt. Ploytechnic College, Nanded "
            info="Hydraulics, Fluid mechanics, Applied mechanics, Manufacturing process, Engineering drawing, Strength of materials, Industrial management, Theory of
            machines, Machine design, CAD/CAM"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;


