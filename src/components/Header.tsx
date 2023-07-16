import Image from "next/image";

import sidemenubar from "/public/side-menubars.svg";
import location from "/public/location.svg";
import sampleimg from "/public/sampleimg.png";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Image src={sidemenubar} width={16} height={12} alt="icon" />
      <div className="flex items-center gap-[3px]">
        <Image src={location} width={16} height={16} alt="icon" />
        <span className="text-[12px] text-[4b5563">연세로 35, 서대문구 (창천동)</span>
      </div>
      <Image src={sampleimg} width={32} height={32} alt="sample" />
    </div>
  );
}

export default Header;
