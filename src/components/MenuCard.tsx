import Image from "next/image";

import price from "/public/price.svg";
import menuimg_sample from "/public/menuimg-sample.png";

function MenuCard() {
  return (
    <div className="w-[340px] h-[73px] bg-transparent border-[1px] border-[#ececec] rounded-[10px] shadow-[0_1px_4px_0_rgba(34,34,34,0.06)] p-[12px] flex justify-start gap-[13px]">
      <Image src={menuimg_sample} width={49} height={49} alt="img" />
      <div className="flex flex-col items-start justify-center gap-[7px]">
        <div className="text-[#1f2937] text-[14px] font-semibold">설레임 삼겹살 (대표)</div>
        <div className="flex justify-start items-center gap-[4px]">
          <Image src={price} width={16} height={16} alt="icon" />
          <div className="text-[#6b7280] text-[10px] font-normal">1인분: 9900원</div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
