import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2 bg-[#313131]">
      <div className="bg-white hight flex flex-row justify-between">
        <div className="p-4 w-8/12">
          <div className="flex flex-col justify-center items-center highet_screen gap-4">
            <p className="text-2xl">Hi There</p>
            <div className="flex flex-row font-bold text-4xl">
              <p>I&apos;m&nbsp;</p>
              <h1 className="text-[#1E436F] uppercase">Shamsul Arefin</h1>
            </div>
            <div className="w-4/12">
              <h2 className="bg-[#1E436F] p-4 rounded-xl text-xl text-white font-semibold">
                Web Developer | Frontend Developer
              </h2>
            </div>
            <p className="w-6/12 text-center">
              I am good at website front End development. I have experience on
              next js, react js and redux. Also in recent projects I am using
              Typescript to make my projects more reliable. I have some team
              collaboration experience and I have worked some real life used
              projects as freelancer.
            </p>
            <button className="flex flex-row gap-3 justify-center items-center bg-[#1E436F] hover:bg-[#000000] rounded-xl p-4 text-white font-semibold">
              <FaDownload />
              Download Resume
            </button>
            <div className="flex flex-row gap-3 bg-center">
              <Link className="p-3 rounded-full bg-sky-900 text-3xl text-white hover:bg-[#000000]" href="https://www.linkedin.com/in/shamsularefinn/" target="_blank">
                <FaLinkedin />
              </Link>
              <Link className="p-3 rounded-full bg-sky-900 text-3xl text-white hover:bg-[#000000]" target="_blank" href="https://github.com/arefin22" >
                <FaGithub />
              </Link>
              <Link className="p-3 rounded-full bg-sky-900 text-3xl text-white hover:bg-[#000000]" target="_blank" href="mailto:$[shamsularefinn@gmail.com]" >
                <MdEmail />
              </Link>
            </div>
          </div>
        </div>
        <div>
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
