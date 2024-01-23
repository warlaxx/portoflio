import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      className="w-3/5 pt-20 flex flex-col gap-2 justify-center text-center"
      id="contact"
    >
      <p className="text-greenlight text-base font-mono">
        04. What&apos;s Next?{" "}
      </p>

      <p className="font-semibold text-[40px] text-gray">Get In Touch</p>

      <p className="text-graydark">
        Although I am currently looking for new professional opportunities, my
        inbox is always open. If you have any interesting opportunities to
        discuss or if you simply want to exchange ideas, feel free to contact
        me! I would be delighted to hear about any potential collaboration.
      </p>
      <div className=" bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t text-gray hover:text-greenlight lg:static lg:h-auto lg:w-auto lg:bg-none pt-12 pb-32">
        <Link
          className="text-greenlight border border-greenlight px-6 py-3 rounded-md font-mono transition-colors duration-700 transform hover:bg-greenlight hover:text-black focus:border-4"
          href="mailto:abdallah42.2001@icloud.com"
        >
          Say Hello
        </Link>
      </div>
    </div>
  );
};

export default Contact;
