import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-2/12 relative">
      <ul className="flex flex-col absolute ml-8 text-xl highet_screen text-white justify-center gap-9">
        <li>
          <Link href="/">
            <div className="rounded-full p-5 bg-[#1E436F] hover:bg-[#000000]">
              <FaHome />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className="rounded-full p-5 bg-[#1E436F] hover:bg-[#000000]">
              <IoPerson />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div className="rounded-full p-5 bg-[#1E436F] hover:bg-[#000000]">
              <RiComputerFill />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div className="rounded-full p-5 bg-[#1E436F] hover:bg-[#000000]">
              <MdPermContactCalendar />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
