import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springVlaue = useSpring(motionValue, { duration: 3000 });

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springVlaue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springVlaue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <div>
      <>
        <Head>
          <title>
            Ruturaj Shinde | About Page
            <meta name="description" content="any description" />
          </title>
        </Head>
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
          <Layout className="pt-16">
            <AnimatedText
              text="Passion Fuels Purpose! "
              className="mb-16  lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
            />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                  About Me
                </h2>
                <p className="font-medium">
                  Greetings! I'm Ruturaj Shinde, a recent CDAC graduate, and a
                  tech enthusiast with a love for problem-solving and
                  innovation. My journey in the world of technology has equipped
                  me with an array of skills, including proficiency in
                  programming languages like Java, C, C++, .NET, and JavaScript.
                  I have a knack for exploring the inner workings of databases,
                  making me adept in database management with MySQL and MS SQL.
                </p>
                <p className=" my-4 font-medium ">
                  My fascination with software development extends to building
                  robust, user-friendly applications. I thrive in dynamic team
                  environments and take pride in utilizing my programming
                  prowess to achieve organizational objectives. In my quest for
                  holistic expertise,
                </p>
                <p className="font-medium">
                  I've also delved into the intricacies of full-stack
                  development. From crafting engaging frontend experiences with
                  React.js to engineering resilient backend solutions with
                  Spring Boot, JDBC, Node.js, and Express, I am primed to tackle
                  the multifaceted challenges of the modern tech landscape. My
                  mission is to continue pushing the boundaries of technology
                  while making a tangible impact in the digital realm.
                </p>
              </div>

              <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4  md:order-1 md:col-span-8 ">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light   " />
                <Image
                  src={profilePic}
                  alt="Ruturaj"
                  className="w-full h-auto rounded-2xl transition-transform transform scale-100 hover:scale-110 hover:duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
                <div className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={250} />
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    Problems Solve
                  </h2>
                </div>
                <div className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={4} />
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    Projects Completed
                  </h2>
                </div>
                <div className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={6} />
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    Months Experience
                  </h2>
                </div>
              </div>
            </div>
            <Skills />
            <Experience />
            <Education />
          </Layout>
        </main>
      </>
    </div>
  );
};

export default about;
