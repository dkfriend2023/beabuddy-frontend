import Image from "next/image";

import samplestoreimg from "/public/samplestoreimg.svg";
import location from "/public/location.svg";

function StoreCard() {
  return (
    <div className="w-[340px] h-[88px] bg-[#ffffff] rounded-[10px] shadow-[0_1px_4px_0_rgba(34,34,34,0.06)] p-[12px] flex justify-between items-center">
      <Image src={samplestoreimg} width={64} height={64} alt="img" />
      <div className="flex flex-col gap-[6px] items-baseline">
        <div className="text-[#1f2937] text-[16px] font-semibold">크리스터치킨</div>
        <div className="flex gap-[4px] items-center">
          <Image src={location} width={16} height={16} alt="icon" />
          <div className="text-[#6b7280] text-[10px] font-normal">
            서대문구 연세로 11길 30
            <br />
            (창천동, 연세대학교 남문)
          </div>
        </div>
      </div>
      <div className="h-full flex items-end">
        <div className="w-[88px] h-[28px] rounded-[8px] bg-[#fe8d00] text-[#fff] text-[12px] font-semibold flex justify-center items-center">
          예약
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
