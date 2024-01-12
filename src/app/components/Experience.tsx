"use client";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Experience = ({ children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("clicked");
  };

  return (
    <div className="w-4/5 sm:w-full">
      <div className="flex items-center w-full gap-6 pt-10">
        <div className="flex items-center gap-3">
          <p className="text-greenlight text-2xl">02.</p>
          <p className="text-gray font-semibold text-3xl">Expérience </p>
        </div>
        <div className="w-2/5 border-t-[0.5px] border-y-graydark"></div>
      </div>
      <div className="pt-10 flex justify-between w-2/5">
        <div
          className="relative"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
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
            <p className="selection:hidden">Sharewood</p>
          </div>
        </div>
        {isClicked && (
          <div className="">
            <p className="text-xl">
              Developpeur Full Stack{" "}
              <span className="text-greenlight font-semibold">@ Sharewood</span>
            </p>
            <p className="text-gray text-sm">Nov 2022 - Nov 2023</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
