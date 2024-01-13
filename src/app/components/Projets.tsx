import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projets = () => {
  return (
    <div className="w-4/5 sm:w-full">
      <div className="flex items-center w-full gap-6 pt-10">
        <div className="flex items-center gap-3">
          <p className="text-greenlight text-2xl">03.</p>
          <p className="text-gray font-semibold text-3xl">Projets </p>
        </div>
        <div className="w-2/5 border-t-[0.5px] border-y-graydark"></div>
      </div>
      <div className="pt-10 flex justify-center">
        <Image
          src="/image/screenshot_DCGG.png" // Le chemin relatif depuis le dossier public
          alt="Description de l'image"
          width={600} // Largeur souhaitée de l'image
          height={200} // Hauteur souhaitée de l'image
          className="rounded-xl"
        />
        <div className="justify-center flex flex-col align-center text-right">
          <p className="text-2xl text-greenlight font-bold">Project DC.GG</p>
          <p className="text-gray px-20 py-10 bg-blue-600">
            Découvrez dc.gg, le site parfait pour les administrateurs de
            serveurs Discord. Créez des liens d&apos;invitation personnalisés et
            suivez les statistiques en temps réel, y compris le nombre de clics
            et d&apos;autres données importantes. Simplifiez la gestion de votre
            serveur et optimisez votre présence en ligne avec dc.gg !
          </p>
          <p className="text-graydark">Next.js Express.js Typescript Prisma </p>
          <a
            href="https://dc.gg/"
            target="_blank"
            className="justify-self-end flex text-right"
          >
            <FaExternalLinkAlt className="text-greenlight " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projets;
