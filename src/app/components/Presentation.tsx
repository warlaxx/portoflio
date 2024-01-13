import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

const Presentation = () => {
  return (
    <div className="w-4/5 sm:w-full">
      <div className="flex items-center w-full gap-6 pt-10">
        <div className="flex items-center gap-3">
          <p className="text-greenlight text-2xl">01.</p>
          <p className="text-gray font-semibold text-3xl">A propos de moi </p>
        </div>
        <div className="w-2/5 border-t-[0.5px] border-y-graydark"></div>
      </div>
      <div className="flex  gap-10 pt-10">
        <div className="w-2/4">
          <p className="text-graydark ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, libero et tincidunt iaculis, felis sapien ultricies
            ligula, vel cursus elit elit ut ipsum. Fusce id leo vel justo
            eleifend vulputate. Sed non fringilla neque. Ut id lacus vel velit
            feugiat facilisis. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Curabitur vitae justo a ex
            dapibus posuere. Maecenas ultrices tortor vel lacinia fringilla.
            Aenean eleifend justo in justo luctus, eu venenatis velit dapibus.
            Sed ullamcorper ex vitae nisi semper, ac congue ligula tincidunt.
            Nullam ultrices felis vitae sapien tincidunt, vitae accumsan nunc
            tincidunt. Nulla facilisi. Sed tincidunt lacinia justo, in tincidunt
            eros cursus vel. Proin sed efficitur lacus. Suspendisse potenti.
            Nulla facilisi. Sed suscipit mi ac dapibus bibendum.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-6">
            <div className="flex items-center gap-3">
              <BsArrowRightShort className="text-greenlight" />
              <p className="text-graydark">Javascript</p>
            </div>
            <div className="flex items-center gap-3">
              <BsArrowRightShort className="text-greenlight" />
              <p className="text-graydark">PHP</p>
            </div>
            <div className="flex items-center gap-3">
              <BsArrowRightShort className="text-greenlight" />
              <p className="text-graydark">React</p>
            </div>

            <div className="flex items-center gap-3">
              <BsArrowRightShort className="text-greenlight" />
              <p className="text-graydark">Vue</p>
            </div>
            <div className="flex items-center gap-3">
              <BsArrowRightShort className="text-greenlight" />
              <p className="text-graydark">Node.js</p>
            </div>
            <div className="flex items-center gap-3">
              <BsArrowRightShort className="text-greenlight" />
              <p className="text-graydark">Laravel</p>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <Image
            src="/image/IMG_0587.jpg" // Le chemin relatif depuis le dossier public
            alt="Description de l'image"
            width={300} // Largeur souhaitée de l'image
            height={100} // Hauteur souhaitée de l'image
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
