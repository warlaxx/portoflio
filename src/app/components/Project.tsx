import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Projets = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full" id="project">
      <div className="flex items-center w-full gap-6 pt-10">
        <div className="flex items-center gap-3">
          <p className="text-greenlight text-2xl">03.</p>
          <p className="text-gray font-semibold text-3xl">
            Some Things I&apos;ve Built{" "}
          </p>
        </div>
        <div className="w-2/5 border-t-[0.5px] border-y-graydark"></div>
      </div>
      <div className="pt-10 flex flex-col md:flex-row items-center ">
        <div className="pt-10 flex flex-col md:flex-row items-center justify-center relative">
          <Link href={"https://dc.gg/"} target="_blank">
            <div
              className={`absolute top-10 left-0 right-0 bottom-0 bg-greenlight transition-opacity duration-300 z-20 rounded-md ${
                isHovered ? "opacity-0" : "opacity-40"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            ></div>

            <Image
              src="/image/screenshot_DCGG.png"
              alt="Description de l'image"
              width={600} // Largeur souhaitée de l'image
              height={100} // Hauteur souhaitée de l'image
              className="rounded-md mb-4 md:mb-0  relative" // Ajoutez des marges selon vos préférences
            />
          </Link>
        </div>

        {/* Contenu texte */}
        <div className="md:text-end block relative right-12 w-2/5 justify-self-end z-50">
          <p className="text-xs text-greenlight font-mono">Featured Project</p>
          <p className="text-2xl text-gray font-bold font-mono ">
            Project DC.GG
          </p>
          <p className="text-graydark  bg-[#112240] mb-4 rounded-md p-[25px] ">
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
    </div>
  );
};

export default Projets;
