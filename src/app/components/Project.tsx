import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Projets = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="md:w-4/5 w-full" id="project">
      <div className="flex items-center w-full gap-6 pt-10">
        <div className="flex items-center gap-3">
          <p className="text-greenlight text-2xl">03.</p>
          <p className="text-gray font-semibold text-3xl">
            Some Things I&apos;ve Built{" "}
          </p>
        </div>
        <div className="w-2/5 border-t-[0.5px] border-y-graydark"></div>
      </div>
      <div className="pt-10 hidden md:flex  items-center ">
        <div className="pt-10 flex flex-col md:flex-row items-center justify-center relative">
          <Link href={"https://dc.gg/"} target="_blank">
            <div
              className={`absolute top-10 left-0 right-0 bottom-0 bg-greenlight transition-opacity duration-300 z-20 rounded-md   ${
                isHovered ? "opacity-0" : "opacity-30"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            ></div>

            <Image
              src="/images/DCGG.png"
              alt="Description de l'image"
              width={800}
              height={100}
              className="rounded-md mb-4 md:mb-0 relative w-full " // Ajoutez des marges selon vos préférences
            />
          </Link>
        </div>

        {/* Contenu texte */}
        <div className="md:text-end block relative right-12 w-2/5 md:w-4/5 justify-self-end z-30 pt-8">
          <p className="text-xs text-greenlight font-mono">Featured Project</p>
          <p className="text-2xl text-gray font-bold font-mono ">
            Project DC.GG
          </p>
          <p className="text-graydark  bg-[#112240] mb-4 rounded-md p-[25px] md:text-base ">
            Explore dc.gg, the perfect site for Discord server administrators.
            Create personalized invitation links and track real-time statistics,
            including the number of clicks and other vital data. Simplify your
            server management and enhance your online presence with dc.gg!
          </p>

          <p className="text-graydark font-mono text-sm justify-between">
            Next.js Express.js TypeScript Prisma
          </p>
        </div>
      </div>

      <div className="pt-10 md:hidden flex items-center relative">
        {/* Contenu texte */}

        {/* Image */}
        <Link href={"https://dc.gg/"} target="_blank">
          <div
            className={`absolute top-10 left-0 right-0 bottom-4 bg-[#112240] transition-opacity duration-300 z-20 rounded-md ${
              isHovered ? "opacity-0" : "opacity-90"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="md:text-end block right-12 z-30 py-5 px-3">
              <p className="text-xs text-greenlight font-mono">
                Featured Project
              </p>
              <p className="text-md text-gray font-bold font-mono ">
                Project DC.GG
              </p>
              <p className="text-graydark mb-4 rounded-md  ">
                Explore dc.gg, the perfect site for Discord server
                administrators. Create personalized invitation links and track
                real-time statistics, including the number of clicks and other
                vital data. Simplify your server management and enhance your
                online presence with dc.gg!
              </p>
              <p className="text-graydark font-mono text-sm justify-between">
                Next.js Express.js TypeScript Prisma
              </p>
            </div>
          </div>

          <Image
            src="/images/DCGGphone.png"
            alt="Description de l'image"
            width={800}
            height={100}
            className="rounded-md mb-4 h-full relative" // Ajoutez des marges selon vos préférences
          />
        </Link>
      </div>
    </div>
  );
};

export default Projets;
