"use client";
import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

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

  const [isClicked, setIsClicked] = useState(true);

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
        <div className="w-10/5 border-t-[0.5px] border-y-graydark"></div>
      </div>
      <div className="pt-10 flex gap-10 w-10/5">
        <div
          className="relative"
          //   onClick={handleClick}
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
          <div className="pt-5 w-2/5">
            <div>
              <p className="text-xl">
                Développeur Full Stack{" "}
                <a href="https://sharewood.team/" target="_blank">
                  <span className="text-greenlight font-semibold">
                    @Sharewood
                  </span>
                </a>
              </p>
              <p className="text-gray text-sm">Nov 2022 - Nov 2023</p>
            </div>
            <div className="pt-5 flex gap-5 ">
              <BsArrowRightShort className="text-greenlight w-[30px] h-[16px] " />
              <p className="text-graydark">
                Chez <span className="text-greenlight ">Sharewood</span>, j'ai
                été impliqué dans une variété de projets, allant de petites
                missions de suivi et de maintenance sur des sites{" "}
                <span className="text-greenlight font-semibold">
                  CMS WordPress
                </span>
                , où la gestion des mises à jour et du contenu était cruciale.
              </p>
            </div>
            <div className="pt-5 flex gap-5 ">
              <BsArrowRightShort className="text-greenlight w-[30px] h-[16px] " />
              <p className="text-graydark">
                En parallèle, j'ai développé des applications avec{" "}
                <span className="text-greenlight font-semibold">Vue.js</span> et{" "}
                <span className="text-greenlight font-semibold">Laravel</span>{" "}
                en back-end pour différents clients, assurant une expérience
                utilisateur optimale et des fonctionnalités avancées.
              </p>
            </div>
            <div className="pt-5 flex gap-5 ">
              <BsArrowRightShort className="text-greenlight w-[30px] h-[16px] " />
              <p className="text-graydark">
                J'ai également pris en charge l'hébergement et le déploiement
                d'une application web, veillant à sa mise en ligne fluide et
                efficace.
              </p>
            </div>
            <div className="pt-5 flex gap-5 ">
              <BsArrowRightShort className="text-greenlight w-[30px] h-[16px] " />
              <p className="text-graydark">
                Tout au long de ces missions, ma priorité a été de produire un
                code propre, bien organisé et optimisé pour garantir des
                performances optimales et une maintenance simplifiée.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
