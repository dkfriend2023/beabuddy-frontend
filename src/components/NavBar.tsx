import Image from "next/image";
import Link from "next/link";

import navhome from "/public/nav-icons/nav-home.svg";
import navheart from "/public/nav-icons/nav-heart.svg";
import navsearch from "/public/nav-icons/nav-search.svg";
import navreserve from "/public/nav-icons/nav-reserve.svg";
import navprofile from "/public/nav-icons/nav-profile.svg";

function NavBar() {
  return (
    <div className="bg-[#ffffff] w-screen h-[64px] rounded-t-[20px] shadow-[0_-5px_14px_0_rgba(0,0,0,0.09)] sticky bottom-0 left-0 right-0 z-10 flex justify-evenly items-center">
      <Link href="#">
        <Image src={navhome} width={36} height={36} alt="icon" />
      </Link>
      <Link href="#">
        <Image src={navheart} width={36} height={36} alt="icon" />
      </Link>
      <Link href="#">
        <Image src={navsearch} width={36} height={36} alt="icon" />
      </Link>
      <Link href="#">
        <Image src={navreserve} width={36} height={36} alt="icon" />
      </Link>
      <Link href="#">
        <Image src={navprofile} width={36} height={36} alt="icon" />
      </Link>
    </div>
  );
}

export default NavBar;
