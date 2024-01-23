"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Navbar.module.css";
import { TbHexagonLetterA } from "react-icons/tb";

const Navbar = () => {
  const [hasTransition, setHasTransition] = useState(false);

  useEffect(() => {
    // Check if the transition has already been applied
    const hasTransitionApplied = localStorage.getItem("hasTransition");
    if (!hasTransitionApplied) {
      // If not, add a delay and set the transition state
      setTimeout(() => {
        setHasTransition(true);
        localStorage.setItem("hasTransition", "true");
      }, 500); // Adjust the delay as needed
    }
  }, []);
  return (
    <div
      className={`fixed right-0 z-50 max-w-full w-full items-center justify-between font-mono text-sm lg:flex px-12  ]  py-3 sm:py-4 bg-gradient-to-b backdrop-blur-2xl dark:bg-[#112240]-800/30 dark:from-inherit ${
        hasTransition ? styles["transition-effect"] : ""
      }`}
    >
      <div className="fixed left-0 top-0 flex w-full justify-center  bg-gradient-to-b from-zinc-200 py-5 sm:py-0 backdrop-blur-2xl dark:border-neutral-800 dark:bg-[#112240]-800/30 dark:from-inherit lg:static lg:w-auto  ">
        <ScrollLink
          activeClass="page"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer font-mono"
        >
          <TbHexagonLetterA className="text-greenlight w-10 h-auto flex justify-center items-center" />
        </ScrollLink>
      </div>

      <div className="hidden items-center gap-5 navbar lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-mono"
          >
            <span className="text-greenlight">01.</span> About
          </ScrollLink>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ScrollLink
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-mono"
          >
            <span className="text-greenlight">02.</span> Experience
          </ScrollLink>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ScrollLink
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-mono"
          >
            <span className="text-greenlight">03.</span> Project
          </ScrollLink>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-mono"
          >
            <span className="text-greenlight">04.</span> Contact
          </ScrollLink>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="text-greenlight border border-greenlight px-6 py-3 rounded-md font-mono transition-colors duration-700 transform hover:bg-greenlight hover:text-black focus:border-4"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
