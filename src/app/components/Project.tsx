import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projets = () => {
  return (
    <div className="w-full">
      <div className="flex items-center w-full gap-6 pt-10">
        <div className="flex items-center gap-3">
          <p className="text-greenlight text-2xl">03.</p>
          <p className="text-gray font-semibold text-3xl">
            Some Things I&apos;ve Built{" "}
          </p>
        </div>
        <div className="w-2/5 border-t-[0.5px] border-y-graydark"></div>
      </div>
      <div className="pt-10 flex justify-center">
        <Image
          src="/image/screenshot_DCGG.png"
          alt="Description de l'image"
          width={300} // Largeur souhaitée de l'image
          height={100} // Hauteur souhaitée de l'image
          className="rounded-xl"
        />

        <div className="justify-center flex flex-col items-center text-right">
          <p className="text-2xl text-greenlight font-bold">Project DC.GG</p>
          <p className="text-gray px-20 py-10 bg-blue-600">
            Explore dc.gg, the perfect site for Discord server administrators.
            Create personalized invitation links and track real-time statistics,
            including the number of clicks and other vital data. Simplify your
            server management and enhance your online presence with dc.gg!
          </p>
          <p className="text-graydark">Next.js Express.js TypeScript Prisma</p>
          <a
            href="https://dc.gg/"
            target="_blank"
            className="justify-self-end flex text-right"
          >
            <FaExternalLinkAlt className="text-greenlight" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projets;
