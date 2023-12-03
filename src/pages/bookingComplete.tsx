import Image from "next/image";
import Link from "next/link";

import AdCard from "../components/AdCard";

import booking_complete_img from "/public/booking-complete-img.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function BookingCompletePage() {
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const reservationData = router.query.reservationData
    ? JSON.parse(router.query.reservationData)
    : null;
  console.log(reservationData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access-token");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DB_HOST}bookings/1/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setBookingData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };

  const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`);
    const hours = time.getHours();
    const minutes = time.getMinutes();

    return `${hours}:${minutes}`;
  };

  if (isLoading) {
    return;
  }

  return (
    <div className="bg-[#fff] overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="w-[375px] p-[16px] pt-[40px]">
        <div className="rounded-[10px] shadow-[0_1px_2px_0_rgba(18,25,38,0.06),0_1px_3px_0_rgba(18,25,38,0.10)] h-[515px] py-[8px] flex flex-col items-center mb-[12px]">
          <Image
            src={booking_complete_img}
            width={208}
            height={213}
            alt="img"
          />
          <div className="flex flex-col items-center mt-[40px] gap-[5px]">
            <h1 className="block text-[#000] text-[34px] font-bold">
              예약 완료&#33;
            </h1>
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
            <h2 className="text-[#545473] text-[16px] font-semibold">
              {bookingData.user.user_nickname}
            </h2>
            <div className="text-[12px] text-[#262628] font-medium flex justify-between">
              <div>예약확인번호</div>
              <div>21FW234</div>
            </div>
            <div className="text-[12px] text-[#262628] font-medium flex justify-between">
              <div>대관일시</div>
              <div>
                {formatDate(reservationData.date)}{" "}
                {formatTime(reservationData.time)}
              </div>
            </div>
            <div className="text-[12px] text-[#262628] font-medium flex justify-between">
              <div>예약 인원</div>
              <div>{reservationData.people_num}명</div>
            </div>
            <div className="text-[12px] text-[#262628] font-medium flex justify-between">
              <div>할당 보증금</div>
              <div>100&#44;000원</div>
            </div>
          </div>
        </div>
        <AdCard />
        <button
          type="button"
          className="w-full h-[64px] bg-[#fe8d00] mt-[12px] rounded-full text-[#fff] font-semibold"
        >
          <Link href={"/home"}>계속 둘러보기</Link>
        </button>
      </div>
    </div>
  );
}

export default BookingCompletePage;
