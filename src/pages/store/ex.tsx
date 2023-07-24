import Image from "next/image";

import arrowleft from "/public/arrow-left.svg";
import location from "/public/location.svg";
import share from "/public/share.svg";
import addheart from "/public/addheart.svg";
import clock from "/public/clock.svg";
import directions from "/public/directions.svg";

function StorePage() {
  return (
    <div className="h-screen bg-[#f6f6f6] overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="w-[375px]">
        <div className="w-full h-[54px] bg-[#fe8d00] rounded-b-[16px] mb-[8px] flex justify-center pt-[24px] relative">
          <div className="absolute left-[12px]">
            <Image src={arrowleft} width={24} height={24} alt="icon" />
          </div>
          <div className="text-[#fff] text-[14px] font-bold">공간 상세 정보</div>
        </div>
        <div className="w-full h-auto bg-[#fff] rounded-t-[16px] px-[18px] pb-[18px]">
          <div className="pt-[20px] pb-[16px] flex justify-between items-start">
            <div>
              <div className="text-[#1f2937] text-[20px] font-semibold">설레임삼겹살</div>
              <div className="flex justify-start items-center gap-[4px]">
                <Image src={location} width={16} height={16} alt="icon" />
                <div className="text-[#6b7280] text-[12px] font-medium">
                  연세로 몇길 55 무슨동 무슨위치
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[7px]">
              <Image src={share} width={24} height={24} alt="icon" />
              <Image src={addheart} width={24} height={24} alt="icon" />
            </div>
          </div>
          <div className="bg-orange-300 w-[345px] h-[191px] rounded-[10px] flex justify-center items-center mb-[24px]">
            식당 사진
          </div>
          <div className="px-[13px] flex justify-between mb-[25px]">
            <div className="flex flex-col items-start gap-[5px]">
              <div className="flex items-center gap-[4px]">
                <Image src={clock} width={16} height={16} alt="icon" />
                <div className="text-[#6b7280] text-[12px] font-medium">영업시간</div>
              </div>
              <div className="text-[#1f2937] text-[12px] font-semibold">14:00 - 03:00</div>
            </div>
            <div className="flex items-center gap-[7px]">
              <Image src={directions} width={20} height={20} alt="icon" />
              <div className="text-[#fe8d00] text-[12px] font-semibold">길찾기</div>
            </div>
          </div>
          <div className="text-[#1f2937] text-[16px] font-semibold px-[4px]">시설 정보</div>
        </div>
      </div>
    </div>
  );
}

export default StorePage;
