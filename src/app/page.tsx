import Image from "next/image";
import { FaDownload } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2 bg-[#313131]">
      <div className="bg-white hight flex flex-row justify-between">
        <div className="p-4 w-8/12">
          <p>Hi There</p>
          <div className="flex flex-row">
            <p>I&apos;m&nbsp;</p>
            <h1>Shamsul Arefin</h1>
          </div>
          <h2>Web Developer | Frontend Developer</h2>
          <p className="w-6/12">
            I am good at website front End development. I have experience on
            next js, react js and redux. Also in recent projects I am using
            Typescript to make my projects more reliable. I have some team
            collaboration experience and I have worked some real life used
            projects as freelancer.
          </p>
          <div>
            <FaDownload />
            <button>Download Resume</button>
          </div>
          <div className="flex flex-row gap-3 bg-center">
            <div className="p-5 rounded-full bg-sky-900 w-10"></div>
            <div className="p-5 rounded-full bg-sky-900 w-10"></div>
            <div className="p-5 rounded-full bg-sky-900 w-10"></div>
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
