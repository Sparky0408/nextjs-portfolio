'use client';
import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { DribbbleIcon } from "./icons";

const Footer = () => {
  return (
    <div>
      <footer className="w-full border-t-2 border-solid border-dark font-medium text-lgv dark:text-light dark:border-light sm:text-base sm:mt-80">
        <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6  sm:mt-10">
          <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
          <div className="flex-items-center lg:py-2">
            Build With
            <span className="text-primary text-2xl px-1 dark:text-primaryDark ">&#9825;</span>by&nbsp;
            <Link
              href="https://www.linkedin.com/in/ruturaj-shinde-2861b2138/"
              target="_blank"
            >
              Ruturaj Shinde
            </Link>
          </div>
          
          <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new " target="_blank">ruturajrs20@gmail.com</a>
        </Layout>
      </footer>
    </div>
  );
};

export default Footer;


