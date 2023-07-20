import Image from "next/image";

import beerimg from "/public/header-icons/beerimg.png";
import dkfriendlogo from "/public/header-icons/dkfriend-logo.svg";

function Header() {
  return (
    <div className="flex justify-between items-center mx-[31px] my-[19px]">
      <Image src={beerimg} width={52} height={37} alt="img" />
      <Image src={dkfriendlogo} width={114} height={41} alt="logo" />
      <Image src={beerimg} width={52} height={37} alt="img" />
    </div>
  );
}

export default Header;
