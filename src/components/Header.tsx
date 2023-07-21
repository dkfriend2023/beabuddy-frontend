import Image from "next/image";

import sidemenubars from "/public/side-menubars.svg";
import dkfriendlogo from "/public/dkfriend-logo.svg";

function Header() {
  return (
    <div className="mt-[26px] mb-[13px] mx-[20px] flex justify-start items-center gap-[94px]">
      <Image
        src={sidemenubars}
        width={16}
        height={12}
        alt="icon"
        style={{ width: 16, height: 12 }}
      />
      <Image
        src={dkfriendlogo}
        width={114}
        height={41}
        alt="logo"
        style={{ width: 114, height: 41 }}
        priority={true}
      />
    </div>
  );
}

export default Header;
