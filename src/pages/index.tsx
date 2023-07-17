import Link from "next/link";
import Image from "next/image";
import { register } from "swiper/element/bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import carousel_indicator_dots from "/public/carousel-indicator-dots.svg";
import chevron_right from "/public/chevron-right.svg";

import Header from "../components/Header";
import AreaCard from "../components/AreaCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import StoreCard from "../components/StoreCard";
import AdCard from "../components/AdCard";
import { CSSProperties } from "react";

register();

function Page() {
  return (
    <div className="h-screen bg-[#f6f6f6] pt-[18px] overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="max-w-[375px]">
        <Header />
        <div className="flex justify-center mb-[28px]">
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
            style={{
              "--swiper-pagination-color": "#fe8d00"
            } as CSSProperties}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
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
        </div>
        <div className="sm:pl-[10px] sm:pr-[10px]">
          <div className="flex justify-between items-center px-[18px]">
            <div className="flex flex-col">
              <div className="text-[#1f2937] text-[16px] sm:text-[15px] font-semibold">지역별 추천</div>
              <div className="text-[#6b7280] text-[12px] sm:text-[11px] font-medium">학교 상권별 모임장소 추천!</div>
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
              <div className="text-[#1f2937] text-[16px] sm:text-[15px] font-semibold">주변 장소 추천</div>
              <div className="text-[#6b7280] text-[12px] sm:text-[11px] font-medium">
                주변 실시간 인기있는 모임장소 추천!
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
