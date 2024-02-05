
import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between
       md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl  sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank "
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}{" "}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="font-mediium w-full  md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
           md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">


        <Details
            position="Web Development Intern"
            company="UNIFIED MENTOR"
            companyLink="https://www.unifiedmentor.com/"
            time="2024"
            address="Remote"
            work="As a Web Development Intern, your role involves actively participating in the design, development, and maintenance of web applications. You will contribute to front-end development using HTML, CSS, and JavaScript, collaborate with cross-functional teams, and gain hands-on experience in writing clean and efficient code. Troubleshooting, testing, and optimizing web applications will be key aspects of your responsibilities, providing you with valuable exposure to real-world projects and the opportunity for professional growth. This internship is designed for individuals eager to learn and contribute to the dynamic field of web development."
          />
          <Details
            position="Student"
            company="CDAC Acts"
            companyLink="https://www.cdac.in/index.aspx?id=acts"
            time="2023"
            address="Pune"
            work="During my time at CDAC ACTS, I've gained hands-on experience in a diverse set of technologies, including Core Java, Data Structures and Algorithms, JavaScript, MySQL, .NET, ReactJS, Spring Boot, Git, Docker, Kubernetes, Jira, Selenium, and Software Development Methodology (SDM). This comprehensive exposure has enriched my skill set and knowledge, equipping me for a wide range of roles in software development and project management."
          />

          <Details
            position="Intern Trainee"
            company="Hyundai"
            companyLink="https://www.hyundai.com/in/en"
            time="2022"
            address="Nanded"
            work="During my educational journey and internships, I've gained valuable hands-on experience in various types of gearboxes, including manual, automatic, and CVT (Continuously Variable Transmission). I've also honed my skills in car servicing, performing routine maintenance, engine diagnostics, and repair tasks. These experiences have deepened my understanding of automotive technology and maintenance procedures, and I'm eager to apply my knowledge in real-world settings."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
