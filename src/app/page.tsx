"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main>
      <div className="bg-white hight flex flex-row justify-between">
        <div className="p-4 w-8/12">
          <div className="flex flex-col justify-center items-center highet_screen gap-6">
            <p className="text-2xl">Hi There</p>
            <div className="flex flex-row font-bold text-4xl">
              <p>I&apos;m&nbsp;</p>
              <h1 className="text-[#1E436F] uppercase">Shamsul Arefin</h1>
            </div>
            <div className="w-5/12">
              <h2 className="bg-[#1E436F] p-4 rounded-xl text-xl text-white text-center uppercase font-semibold">
                Web Developer | Frontend Developer
              </h2>
            </div>
            <p className="w-6/12 text-center">
              I specialize in creating captivating websites using Next.js,
              React.js, Redux, and TypeScript. Let&apos;s work together to bring your
              ideas to life and leave a lasting impression on your audience.
            </p>
            <button className="flex flex-row gap-3 justify-center items-center bg-[#1E436F] hover:bg-[#000000] rounded-xl p-4 text-white font-semibold">
              <FaDownload />
              Download Resume
            </button>
            <div className="flex flex-row gap-3 bg-center">
              <Link
                className="p-3 rounded-full bg-sky-900 text-3xl text-white hover:bg-[#000000]"
                href="https://www.linkedin.com/in/shamsularefinn/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="p-3 rounded-full bg-sky-900 text-3xl text-white hover:bg-[#000000]"
                target="_blank"
                href="https://github.com/arefin22"
              >
                <FaGithub />
              </Link>
              <Link
                className="p-3 rounded-full bg-sky-900 text-3xl text-white hover:bg-[#000000]"
                target="_blank"
                href="mailto:$[shamsularefinn@gmail.com]"
              >
                <MdEmail />
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <Image
            src="https://i.ibb.co/5xtQjCY/resumepic.jpg"
            alt="Resume Picture"
            width="1000"
            height="1000"
            className="rounded-2xl photoHeight w-full"
          />
        </div>
      </div>
    </main>
  );
}
