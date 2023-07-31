import Image from "next/image";
import Link from "next/link";

import AdCard from "../components/AdCard";

import booking_complete_img from "/public/booking-complete-img.svg";

function BookingCompletePage() {
  return (
    <div className="bg-[#fff] overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="w-[375px] p-[16px]">
        <div className="rounded-[10px] shadow-[0_1px_2px_0_rgba(18,25,38,0.06),0_1px_3px_0_rgba(18,25,38,0.10)] h-[515px] py-[8px] flex flex-col items-center mb-[12px]">
          <Image src={booking_complete_img} width={208} height={213} alt="img" />
          <div className="flex flex-col items-center mt-[40px] gap-[5px]">
            <h1 className="block text-[#000] text-[34px] font-bold">예약 완료&#33;</h1>
            <div className="flex flex-col items-center">
              <p className="block text-[#4b5563] text-[12px] font-normal">
                보증금 납부 시 예약이 확정됩니다&#33;
              </p>
              <p className="block text-[#4b5563] text-[12px] font-normal">
                (계좌번호)로 보증금 입금 확인 후 예약확정 처리됩니다
              </p>
            </div>
          </div>
          <div className="flex flex-col p-[12px] w-full gap-[9px]">
            <h2 className="text-[#545473] text-[16px] font-semibold">박민성</h2>
            <div className="text-[12px] text-[#262628] font-medium flex justify-between">
              <div>예약확인번호</div>
              <div>21FW234</div>
            </div>
            <div className="text-[12px] text-[#262628] font-medium flex justify-between">
              <div>대관일시</div>
              <div>2023년 7월 7일 20&#58;00~24&#58;00</div>
            </div>
            <div className="text-[12px] text-[#262628] font-medium flex justify-between">
              <div>예약 인원</div>
              <div>120 명</div>
            </div>
            <div className="text-[12px] text-[#262628] font-medium flex justify-between">
              <div>할당 보증금</div>
              <div>100&#44; 000 원</div>
            </div>
          </div>
        </div>
        <AdCard />
        <button
          type="button"
          className="w-full h-[64px] bg-[#fe8d00] mt-[12px] rounded-full text-[#fff] font-semibold"
        >
          <Link href={"/"}>계속 둘러보기</Link>
        </button>
      </div>
    </div>
  );
}

export default BookingCompletePage;
