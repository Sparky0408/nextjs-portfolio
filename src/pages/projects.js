import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import medicareimg from "../../public/images/projects/medicare.png";
import aimain from "../../public/images/projects/ai-main.png";
import portfolioimg from "../../public/images/projects/portfolio.png";
import todolist from "../../public/images/projects/todolist.png";
import jobapp from "../../public/images/projects/jobapp.png";


const FeaturedProject = ({ type, title, summary, img, link, githublink }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl rounded-3xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  rounded-br-3xl dark:bg-light
         xs:-right-2 sm:h-[102%]  xs:w-full xs:rounded-[1.5rem]  "
      />
      <a
        href={link}
        target="_blank "
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className=" w-full h-auto transition-transform transform scale-100 hover:scale-110 hover:duration-500 "
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </a>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className=" text-primary font-medium text-xl dark:text-primaryDark  xs:text-base">
          {" "}
          {type}
        </span>

        <a
          href={link}
          target="_blank"
          className="hover:underline  underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold  dark:text-light sm:text-sm">
            {title}
          </h2>
        </a>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex  items-center">
          <Link href={githublink} target="_blank  " className="w-10">
            <GithubIcon />
          </Link>
          <a
            href={link}
            target="_blank "
            className="flex items-center bg-dark text-light p-2.5 ml-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
            border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
             sm:px-4 sm:text-base"
          >
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject2 = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl  border border-solid  border-dark  bg-light  p-6 relative shadow-md dark:bg-dark dark:border-light 
     xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark  rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%]  xs:h-[102%] xs:rounded-[1.5rem] " />
      <a
        href={link}
        target="_blank "
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition-transform transform scale-100 hover:scale-110 hover:duration-500"
        />
      </a>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-primary font-medium text-xl dark:text-primaryDark  lg:text-lg md:text-base ">
          {" "}
          {type}
        </span>

        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </a>

        <div className="w-full mt-2 flex items-center justify-between">
          <a
            href={link}
            target="_blank "
            className=" underline text-lg font-semibold  md:text-base"
          >
            Visit
          </a>
          <Link href={github} target="_blank  " className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>
          Ruturaj Shinde | Projects Page
          <meta name="description" content="any description" />
        </title>
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className=" grid grid-cols-12 gap-24 gap-y-32  xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className=" col-span-12  ">
              <FeaturedProject
                title="AI Article Summarizer App🚀 "
                img={aimain}
                summary="Built with Vite, React, and Tailwind CSS, this project harnesses the power of the Rapid API to provide an innovative 
                AI-driven article summarization experience. By simply inputting the URL of any webpage, the app utilizes advanced natural 
                language processing to generate concise and coherent summaries. Explore the future of content consumption with the AI Article 
                Summarizer App, making information more accessible and digestible."
                link="https://ai-article-summarizer-ruturaj.netlify.app/"
                githublink="https://github.com/Sparky0408/AI-Article-Summarizer-App
           "
                type="Article Summarization Tool"
              />
            </div>


            <div className=" col-span-12  ">
              <FeaturedProject
                title="JobExplorer Plus App🚀 "
                img={jobapp}
                summary="Crafted with React Native using the Expo framework, powered by Rapid API for dynamic job listings. Enjoy a user-friendly
                 UI for seamless job exploration and application. Your career journey, simplified."
                link="https://www.amazon.com/dp/B0CPXCYDZQ/ref=apps_sf_sta"
                githublink="https://gitlab.com/RuturajShinde/react-native-job-app
           "
                type="React Native Application"
              />
            </div>

            <div className=" col-span-6 sm:col-span-12 ">
              <FeaturedProject2
                title="Portfolio"
                img={portfolioimg}
                link="https://ruturaj-portfolio.netlify.app/"
                github="https://github.com/Sparky0408/nextjs-portfolio.git
   "
                type="Site"
              />
            </div>

            <div className=" col-span-6 sm:col-span-12">
              <FeaturedProject2
                title="Todo-List"
                img={todolist}
                link="https://todolist-react-ruturaj.netlify.app/"
                github="https://github.com/Sparky0408/todolist-react
"
                type="Application"
              />
            </div>

            <div className=" col-span-12  ">
              <FeaturedProject
                title="Medicare-Track"
                img={medicareimg}
                summary=" The 'Medicare-Track' project aims to simplify medical storage systems by developing an 
           innovative and efficient storage solution leads the unique needs of healthcare facilities. In 
           today's rapidly evolving healthcare world , the demand for effective storage and organization 
           of medical supplies, equipment, and medications has never been more crucial. The project's 
           core focus is to create a storage system that maximizes space utilization, enhances 
           accessibility, ensures regulatory compliance, and promotes efficient inventory management 
           within hospitals, clinics, and healthcare institutions."
                link="https://medicare-track.netlify.app/"
                githublink="https://github.com/Sparky0408/Medicare-Track.git
           "
                type="CDAC Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
