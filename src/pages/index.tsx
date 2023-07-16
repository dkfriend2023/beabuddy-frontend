import Link from "next/link";
import Image from "next/image";

import carousel_indicator_dots from "/public/carousel-indicator-dots.svg";
import chevron_right from "/public/chevron-right.svg";

import Header from "../components/Header";
import AreaCard from "../components/AreaCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import StoreCard from "../components/StoreCard";

function Page() {
  return (
    <div className="h-screen bg-[#f6f6f6] relative pt-[18px] overflow-x-hidden overflow-y-scroll">
      <Header />
      <Link href="#">
        <div className="flex justify-center">
          <SearchBar />
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center mb-[36px]">
        <div className="w-[280px] h-[120px] bg-[#ff9f06] rounded-[28px] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] mb-[18px]"></div>
        <Image src={carousel_indicator_dots} width={35} height={9} alt="icon" />
      </div>
      <div className="flex justify-between items-center px-[18px]">
        <div className="flex flex-col">
          <div className="text-[#1f2937] text-[16px] font-semibold">지역별 추천</div>
          <div className="text-[#6b7280] text-[12px] font-medium">학교 상권별 모임장소 추천!</div>
        </div>
        <Link href="#">
          <div className="flex justify-between items-center w-[44px]">
            <div className="text-[#6b7280] text-[12px] font-medium">더보기</div>
            <Image src={chevron_right} width={5} height={8.75} alt="icon" />
          </div>
        </Link>
      </div>
      <div className="flex gap-[14px] mt-[16px] mb-[36px] px-[18px]">
        <AreaCard />
        <AreaCard />
        <AreaCard />
      </div>
      <div className="flex justify-between items-center px-[18px]">
        <div className="flex flex-col">
          <div className="text-[#1f2937] text-[16px] font-semibold">주변 장소 추천</div>
          <div className="text-[#6b7280] text-[12px] font-medium">
            주변 실시간 인기있는 모임장소 추천!
          </div>
        </div>
        <Link href="#">
          <div className="flex justify-between items-center w-[44px]">
            <div className="text-[#6b7280] text-[12px] font-medium">더보기</div>
            <Image src={chevron_right} width={5} height={8.75} alt="icon" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-[6px] mt-[16px] px-[18px] mb-[6px]">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
      <NavBar />
    </div>
  );
}

export default Page;
