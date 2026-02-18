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
                  Greetings! I'm Ruturaj Shinde, a Data Engineer and Python Automation Engineer
                  with hands-on experience in building scalable automation and data processing
                  solutions. I specialize in Python-based web automation, API integrations, and
                  cloud-driven document workflows. My work focuses on transforming complex,
                  manual processes into reliable, automated pipelines.
                </p>
                <p className="my-4 font-medium">
                  I have strong experience in extracting and processing structured and
                  unstructured data using tools like Selenium and Playwright, along with
                  backend development using Flask and FastAPI. I regularly work with relational
                  databases such as MySQL and MS SQL Server to design efficient data storage and
                  retrieval solutions.
                </p>
                <p className="font-medium">
                  My technical interests extend to cloud-based automation and document
                  processing, including OCR, PDF automation, and language translation using
                  Google Cloud and Azure services. I enjoy working in collaborative environments
                  where I can solve real-world problems through clean architecture, efficient
                  APIs, and scalable data pipelines, while continuously improving my backend
                  and cloud engineering skills.
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
                    <AnimatedNumbers value={2} />
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    Years of Experience
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
