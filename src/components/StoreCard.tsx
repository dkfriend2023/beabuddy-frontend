import Image from "next/image";

import samplestoreimg from "/public/samplestoreimg.svg";
import location from "/public/location.svg";

function StoreCard() {
  return (
    <div className="w-full h-[88px] sm:h-[70px] bg-[#ffffff] rounded-[10px] shadow-[0_1px_4px_0_rgba(34,34,34,0.06)] p-[12px] mt-[3px] mb-[3px] flex justify-between items-center">
      <Image src={samplestoreimg} width={64} height={64} alt="img" className="sm:w-[40px] md:w-[55px]"/>
      <div className="flex flex-col gap-[6px] sm:gap-[2px] sm:w-[100px] items-baseline">
        <div className="text-[#1f2937] text-[16px] sm:text-[13px] font-semibold">크리스터치킨</div>
        <div className="flex gap-[4px] items-center sm:hidden">
          <Image src={location} width={16} height={16} alt="icon" />
          <div className="text-[#6b7280] text-[10px] sm:w-[80px] font-normal">
            서대문구 연세로 11길 30
            <br />
            (창천동, 연세대학교 남문)
          </div>
        </div>
      </div>
      <div className="h-full flex items-end">
        <div className="w-[88px] h-[28px] sm:w-[60px] rounded-[8px] bg-[#fe8d00] text-[#fff] text-[12px] font-semibold flex justify-center items-center">
          예약
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
