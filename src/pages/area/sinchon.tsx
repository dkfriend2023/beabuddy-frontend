import Link from "next/link";

import Header from "@/src/components/Header";
import SearchBar from "@/src/components/SearchBar";
import StoreCard from "@/src/components/StoreCard";

function SinchonPage() {
  return (
    <div className="h-screen bg-[#f6f6f6] overflow-x-hidden overflow-y-scroll">
      <div className="max-w-[375px]">
        <Header />
        <div className="flex justify-around items-center mx-[18px] mb-[28px]">
          <Link href="#">
            <SearchBar />
          </Link>
        </div>
        <div className="sm:pl-[10px] sm:pr-[10px]">
          <div className="flex justify-between items-center mx-[18px] mb-[16px]">
            <div className="flex flex-col">
              <div className="text-[#1f2937] text-[16px] sm:text-[15px] font-semibold">
                연세대학교 (신촌) 대관
              </div>
              <div className="text-[#6b7280] text-[12px] sm:text-[11px] font-medium">
                연세대학교 남문 ~ 신촌역 술집
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[6px] mt-[16px] px-[18px] mb-[6px]">
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinchonPage;
