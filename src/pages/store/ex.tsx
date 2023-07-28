import Image from "next/image";
import Link from "next/link";

import arrowleft from "/public/arrow-left.svg";
import location from "/public/location.svg";
import share from "/public/share.svg";
import addheart from "/public/addheart.svg";
import clock from "/public/clock.svg";
import directions from "/public/directions.svg";
import chevron_right from "/public/chevron-right.svg";
import location_sample from "/public/location-sample.png";

import seats from "/public/info-icons/seats.svg";
import floors from "/public/info-icons/floors.svg";
import payment from "/public/info-icons/payment.svg";
import parking from "/public/info-icons/parking.svg";
import atmosphere from "/public/info-icons/atmosphere.svg";
import screen from "/public/info-icons/screen.svg";

import MenuCard from "@/src/components/MenuCard";

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
          <div className="flex justify-center items-center">
            <div className="bg-orange-300 w-[345px] h-[191px] rounded-[10px] flex justify-center items-center mb-[24px]">
              식당 사진
            </div>
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
          <div className="text-[#1f2937] text-[16px] font-semibold px-[4px] mb-[13px]">
            시설 정보
          </div>
          <div className="flex justify-between mb-[45px]">
            <div className="flex flex-col items-center gap-[4px]">
              <div className="bg-[#fe8d00] w-[45.962px] h-[45.962px] opacity-[0.25] rounded-[20px] border-[0.5px] border-[#e06738] relative"></div>
              <div className="text-[#000] text-[8px] font-bold">총 __석</div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="bg-[#fe8d00] w-[45.962px] h-[45.962px] opacity-[0.25] rounded-[20px] border-[0.5px] border-[#e06738] relative"></div>
              <div className="text-[#000] text-[8px] font-bold">N개 층</div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="bg-[#fe8d00] w-[45.962px] h-[45.962px] opacity-[0.25] rounded-[20px] border-[0.5px] border-[#e06738] relative"></div>
              <div className="text-[#000] text-[8px] font-bold">보증금 X</div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="bg-[#fe8d00] w-[45.962px] h-[45.962px] opacity-[0.25] rounded-[20px] border-[0.5px] border-[#e06738] relative"></div>
              <div className="text-[#000] text-[8px] font-bold">주차 X</div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="bg-[#fe8d00] w-[45.962px] h-[45.962px] opacity-[0.25] rounded-[20px] border-[0.5px] border-[#e06738] relative"></div>
              <div className="text-[#000] text-[8px] font-bold">시끌시끌</div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <div className="bg-[#fe8d00] w-[45.962px] h-[45.962px] opacity-[0.25] rounded-[20px] border-[0.5px] border-[#e06738] relative"></div>
              <div className="text-[#000] text-[8px] font-bold">스크린 O</div>
            </div>
          </div>
          <div className="flex justify-between items-center px-[4px] mb-[21px]">
            <div className="flex flex-col">
              <div className="text-[#1f2937] text-[16px] sm:text-[15px] font-semibold">
                대표메뉴
              </div>
              <div className="text-[#6b7280] text-[12px] sm:text-[11px] font-medium">
                이 레스토랑의 대표메뉴는?!
              </div>
            </div>
            <Link href="#">
              <div className="flex justify-between items-center w-[44px]">
                <div className="text-[#fe8d00] text-[12px] sm:text-[11px] font-medium">더보기</div>
                <Image
                  src={chevron_right}
                  width={5}
                  height={8.75}
                  alt="icon"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-[6px] mb-[28px]">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
          <div className="text-[#1f2937] text-[16px] font-semibold px-[4px] mb-[8px]">위치정보</div>
          <div className="mb-[28px]">
            <Image src={location_sample} width={339} height={300} alt="img" />
          </div>
          <div className="text-[#1f2937] text-[16px] font-semibold px-[4px] mb-[15px]">
            식당 소개
          </div>
          <div className="px-[4px] text-[#6b7280] text-[10px] font-normal mb-[24px]">
            식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당
            소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개
            식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당
            소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개 식당 소개
          </div>
          <div className="text-[#1f2937] text-[16px] font-semibold px-[4px] mb-[10px]">
            유의사항
          </div>
          <div className="px-[4px] text-[#6b7280] text-[10px] font-normal">
            -30인 이상 예약시 10만원의 보증금이 발생합니다 <br />
            -예약 인원의 반 이상이 식당을 방문하지 않으면 보증금을 환급받을 수 없습니다 <br />
            -30인 이상 예약시 인당 2만원 이상 주문해주셔야 합니다 <br />
            -30인 이상 예약시 메뉴 사전 주문이 필수입니다 <br />
            -식당 방문 시각이 30분 이상 변경될 경우 식당 측에 전화해주시길 바랍니다 <br />
            -예약인원 수에 변경이 생길 시 방문 당일 오후 4시 이전까지 식당 측에 전화해주시길
            바랍니다 <br />
            -이용 후 결제내역을 대관친구 카카오톡 채널로 보내주시면 적립금 적립이 가능합니다
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorePage;
