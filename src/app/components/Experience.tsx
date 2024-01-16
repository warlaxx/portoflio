"use client";
import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("clicked");
  };

  return (
    <div className="md:w-4/5 sm:w-full" id="experience">
      <div className="flex items-center w-full gap-6 pt-10">
        <div className="flex items-center gap-3 w-full">
          <p className="text-greenlight text-2xl">02.</p>
          <p className="text-gray font-semibold text-3xl">
            Where I&apos;ve Worked{" "}
          </p>
          <div className="md:w-2/5 border-t-[0.5px] border-y-graydark md:block hidden"></div>
        </div>
      </div>
      <div className="pt-10 flex gap-10 w-10/5">
        <div
          className="relative"
          //   onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <div
            className={` pl-6 h-8 items-center ${
              isHovered
                ? "border-l-2 text-greenlight justify-center cursor-pointer"
                : ""
            }
            ${
              isClicked
                ? "border-l-2 text-greenlight justify-center cursor-pointer"
                : ""
            }`}
          >
            <p className="selection:hidden hidden">Sharewood</p>
          </div> */}
        </div>
        {isClicked && (
          <div className="pt-5 w-4/5">
            <div>
              <p className="text-xl">
                Full-stack Developer{" "}
                <a href="https://sharewood.team/" target="_blank">
                  <span className="text-greenlight font-semibold">
                    @Sharewood
                  </span>
                </a>
              </p>
              <p className="text-gray text-sm">Nov 2022 - Nov 2023</p>
            </div>
            <div className="pt-5 flex gap-5">
              <BsArrowRightShort className="text-greenlight w-[30px] h-[16px]" />
              <p className="text-graydark">
                At <span className="text-greenlight">Sharewood</span>, I have
                been involved in a variety of projects, ranging from small
                tracking and maintenance tasks on{" "}
                <span className="text-greenlight font-semibold">
                  CMS WordPress
                </span>
                , where managing updates and content was crucial.
              </p>
            </div>
            <div className="pt-5 flex gap-5">
              <BsArrowRightShort className="text-greenlight w-[30px] h-[16px]" />
              <p className="text-graydark">
                In parallel, I developed applications with{" "}
                <span className="text-greenlight font-semibold">Vue.js</span>{" "}
                and{" "}
                <span className="text-greenlight font-semibold">Laravel</span>{" "}
                on the back-end for various clients, ensuring an optimal user
                experience and advanced features.
              </p>
            </div>
            <div className="pt-5 flex gap-5">
              <BsArrowRightShort className="text-greenlight w-[30px] h-[16px]" />
              <p className="text-graydark">
                I also handled the hosting and deployment of a web application,
                ensuring its smooth and efficient online presence.
              </p>
            </div>
            <div className="pt-5 flex gap-5">
              <BsArrowRightShort className="text-greenlight w-[30px] h-[16px]" />
              <p className="text-graydark">
                Throughout these missions, my priority has been to produce
                clean, well-organized, and optimized code to ensure optimal
                performance and simplified maintenance.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
