import Link from "next/link";
import Image from "next/image";
import { register } from "swiper/element/bundle";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import carousel_indicator_dots from "/public/carousel-indicator-dots.svg";
import chevron_right from "/public/chevron-right.svg";

import Header from "../components/Header";
import AreaCard from "../components/AreaCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import StoreCard from "../components/StoreCard";
import AdCard from "../components/AdCard";

register();

function Page() {
  return (
    <div className="h-screen bg-[#f6f6f6] pt-[18px] overflow-x-hidden overflow-y-scroll">
      <Header />
        <div className="flex justify-center mb-[28px]">
          <Link href="#">
            <SearchBar />
          </Link>
        </div>
      <div className="mb-[36px] max-w-[350px] ml-auto mr-auto flex flex-col items-center">
        <Swiper space-between={50} slidesPerView={"auto"} centeredSlides={true} loop={false} className="w-full mb-[20px]">
          <SwiperSlide>
            <AdCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdCard />
          </SwiperSlide>
        </Swiper>
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
      <div className="mt-[16px] mb-[36px] px-[18px]">
        <Swiper spaceBetween={20} slidesPerView={"auto"}>
          <SwiperSlide className="max-w-[200px]">
            <AreaCard />
          </SwiperSlide>
          <SwiperSlide className="max-w-[200px]">
            <AreaCard />
          </SwiperSlide>
          <SwiperSlide className="max-w-[200px]">
            <AreaCard />
          </SwiperSlide>
        </Swiper>
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
    </div>
  );
}

export default Page;
