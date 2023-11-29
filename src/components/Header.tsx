import Image from "next/image";

import sidemenubars from "/public/side-menubars.svg";
import textlogo from "/public/logo/textlogo.svg";

function Header() {
  return (
    <div className="mt-[26px] mb-[13px] mx-[20px] flex justify-between items-center">
      <Image
        src={sidemenubars}
        width={16}
        height={12}
        alt="icon"
        style={{ width: 16, height: 12 }}
      />
      <Image
        src={textlogo}
        width={114}
        height={41}
        alt="logo"
        style={{ width: 114, height: 41 }}
        priority={true}
      />
      <div className="w-[16px] h-[12px]"></div>
    </div>
  );
}

export default Header;
