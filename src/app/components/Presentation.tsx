import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

const Presentation = () => {
  return (
    <div className="md:w-4/5 sm:w-full" id="about">
      <div className="flex items-center w-full gap-6 pt-10">
        <div className="flex items-center gap-3">
          <p className="text-greenlight text-2xl">01.</p>
          <p className="text-gray font-semibold text-3xl">About Me </p>
        </div>
        <div className="md:w-2/5 hidden md:block border-t-[0.5px] border-y-graydark"></div>
      </div>
      <div className="flex flex-col md:flex-row  gap-10 pt-10">
        <div className="md:w-2/4">
          <p className="text-graydark pb-5">
            Hello ! My name is Abdallah, and I enjoy creating things that come
            to life on the Internet. My interest in web development started in
            2020 when I decided to try creating my own website.
          </p>
          <p className="text-graydark pb-5">
            Today, I&apos;ve had the privilege of working in a web agency where
            I could discover the world of web development and the daily life of
            a developer. My main goal these days is to find a motivating company
            and project where I can showcase my skills and continue learning
            more in my field.
          </p>
          <p className="text-graydark ">
            Here are a few technologies I&apos;ve been working with recently:
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
            src="/images/IMG_0587.jpg" // Le chemin relatif depuis le dossier public
            alt="Description de l'image"
            width={800} // Largeur souhaitée de l'image
            height={100} // Hauteur souhaitée de l'image
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
