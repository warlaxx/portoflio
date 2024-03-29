"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

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
        <main className="flex flex-col px-5 md:px-10   bg-[#0a192f]">
          <Navbar />

          <div className="flex flex-col page">
            <div className="flex flex-col px-[2vw] md:px-[10vw] 2xl:px-[20vw] lg:px-[5vw] ">
              <div className="min-h-[90vh] justify-center flex">
                <div className=" flex-col items-center  justify-center self-center">
                  <p className="text-greenlight font-mono ">Hi, my name is</p>
                  <p className="text-gray md:text-[80px] text-[40px] font-semibold ">
                    Abdallah Abdallaoui-maane
                  </p>
                  <p className="text-graydark md:text-[80px] text-[40px] font-extrabold ">
                    I build things for the web.
                  </p>
                  <p className="text-gray font-mono">
                    I&apos;m a full-stack developer specializing in the JS stack
                    to create various types of web applications.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center self-center">
                <Presentation />

                <Experience />

                <Projets />

                <Contact />
              </div>

              <Link
                href="https://v4.brittanychiang.com"
                target="_blank"
                className="text-graydark font-mono text-[11px] justify-center flex pb-5 "
              >
                Inspired by Brittany Chiang&apos;s portfolio
              </Link>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
