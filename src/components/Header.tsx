import Image from "next/image";

import location from "/public/location.svg";

function Header() {
  return (
    <div className="flex justify-center items-center gap-[3px] pt-[16px] pb-[16px]">
      <Image src={location} width={16} height={16} alt="icon" />
      <span className="text-[12px] text-[4b5563">연세로 35, 서대문구 (창천동)</span>
    </div>
  );
}

export default Header;
