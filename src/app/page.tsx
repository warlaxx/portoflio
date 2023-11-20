import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-full w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          logo
        </p>
        <div className="flex items-center gap-5">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-greenlight">01.</span> About
            </a>
          </div>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a>
              <span className="text-greenlight">02.</span> Experience
            </a>
          </div>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a>
              <span className="text-greenlight">03.</span> Work
            </a>
          </div>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a>
              <span className="text-greenlight">04.</span> Contact
            </a>
          </div>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight hover:cursor-pointer   lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a className="text-greenlight border border-greenlight px-6 py-3 rounded-md">
              Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
