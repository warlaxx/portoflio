import Image from "next/image";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Experience from "./components/Experience";
import Projets from "./components/Projets";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col px-10  pt-12 ">
      <Navbar />
      <div className="flex flex-col pt-32   px-[150px]">
        <div className="flex flex-col  px-[150px]">
          <div className="min-h-screen justify-center flex">
            <div className=" flex-col items-center  justify-center">
              <p className="text-greenlight pb-8">Bonjour, je m'appel</p>
              <p className="text-gray text-5xl font-semibold pb-4">
                Abdallah Abdallaoui-maane
              </p>
              <p className="text-graydark text-3xl font-extrabold pb-4">
                Passionné par l'informatique
              </p>
              <p className="text-gray">
                Je suis développeur full stack spécialiser en Stack JS pour
                créer tout type d'application web.{" "}
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
  );
}
