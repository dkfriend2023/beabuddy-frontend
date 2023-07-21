import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { register } from "swiper/element/bundle";

import { CSSProperties } from "react";

import "swiper/css";
import "swiper/css/pagination";

import chevron_right from "/public/chevron-right.svg";

import Header from "../components/Header";
import AreaCard from "../components/AreaCard";
import SearchBar from "../components/SearchBar";
import StoreCard from "../components/StoreCard";
import AdCard from "../components/AdCard";

register();

function Page() {
  return (
    <div className="h-screen bg-[#f6f6f6] overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="max-w-[375px]">
        <Header />
        <div className="flex justify-around items-center mx-[18px] mb-[28px]">
          <Link href="#">
            <SearchBar />
          </Link>
        </div>
        <div className="mb-[36px] px-[18px] max-w-[370px] sm:max-w-[300px] mx-auto">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides={true}
            slideToClickedSlide={true}
            centeredSlidesBounds={true}
            spaceBetween={30}
            style={
              {
                "--swiper-pagination-color": "#fe8d00",
              } as CSSProperties
            }
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide id="0">
              <AdCard />
            </SwiperSlide>
            <SwiperSlide id="1">
              <AdCard />
            </SwiperSlide>
            <SwiperSlide id="2">
              <AdCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="sm:pl-[10px] sm:pr-[10px]">
          <div className="flex justify-between items-center px-[18px]">
            <div className="flex flex-col">
              <div className="text-[#1f2937] text-[16px] sm:text-[15px] font-semibold">
                지역별 추천
              </div>
              <div className="text-[#6b7280] text-[12px] sm:text-[11px] font-medium">
                학교 상권별 모임장소 추천!
              </div>
            </div>
            <Link href="#">
              <div className="flex justify-between items-center w-[44px]">
                <div className="text-[#6b7280] text-[12px] sm:text-[11px] font-medium">더보기</div>
                <Image src={chevron_right} width={5} height={8.75} alt="icon" />
              </div>
            </Link>
          </div>
          <div className="mt-[16px] mb-[36px] px-[18px]">
            <Swiper spaceBetween={20} slidesPerView={"auto"}>
              <SwiperSlide className="max-w-[200px] sm:max-w-[160px]">
                <AreaCard />
              </SwiperSlide>
              <SwiperSlide className="max-w-[200px] sm:max-w-[160px]">
                <AreaCard />
              </SwiperSlide>
              <SwiperSlide className="max-w-[200px] sm:max-w-[160px]">
                <AreaCard />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex justify-between items-center px-[18px]">
            <div className="flex flex-col">
              <div className="text-[#1f2937] text-[16px] sm:text-[15px] font-semibold">
                큐레이터 추천
              </div>
              <div className="text-[#6b7280] text-[12px] sm:text-[11px] font-medium">
                대학생에게 인기있는 모임장소 추천! (광고+)
              </div>
            </div>
            <Link href="#">
              <div className="flex justify-between items-center w-[44px]">
                <div className="text-[#6b7280] text-[12px] sm:text-[11px] font-medium">더보기</div>
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
          <div className="h-[20px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
