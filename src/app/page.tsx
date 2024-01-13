"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Experience from "./components/Experience";
import Projets from "./components/Project";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mettez à jour l'état loading après un certain délai (simulant le chargement de vos ressources)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Délai de 3 secondes dans cet exemple

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <main className="flex flex-col px-10  pt-12 ">
          <Navbar />

          <div className="flex flex-col pt-32   px-[150px]">
            <div className="flex flex-col  px-[150px]">
              <div className="min-h-screen justify-center flex">
                <div className=" flex-col items-center  justify-center">
                  <p className="text-greenlight pb-8">Hello, my name is</p>
                  <p className="text-gray text-5xl font-semibold pb-4">
                    Abdallah Abdallaoui-maane
                  </p>
                  <p className="text-graydark text-3xl font-extrabold pb-4">
                    Passionate about computer science, new technologies, and
                    development
                  </p>
                  <p className="text-gray">
                    I am a full-stack developer specializing in the JS stack to
                    create various types of web applications.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center self-center">
                <Presentation />

                <Experience />

                <Projets />

                <Contact />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
