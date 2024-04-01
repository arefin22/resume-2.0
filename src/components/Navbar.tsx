import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-2/12 relative">
      <ul className="flex flex-col absolute ml-4 text-xl highet_screen text-white justify-center gap-9">
        <li className="rounded-full p-5 bg-[#1E436F] hover:bg-[#000000]">
          <Link href="#">
            <FaHome />
          </Link>
        </li>
        <li className="rounded-full p-5 bg-[#1E436F] hover:bg-[#000000]">
          <Link href="#">
            <IoPerson />
          </Link>
        </li>
        <li className="rounded-full p-5 bg-[#1E436F] hover:bg-[#000000]">
          <Link href="#">
            <RiComputerFill />
          </Link>
        </li>
        <li className="rounded-full p-5 bg-[#1E436F] hover:bg-[#000000]">
          <Link href="#">
            <MdPermContactCalendar />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
