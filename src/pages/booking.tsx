import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "../components/Calendar";

import arrowleft from "public/detail-icons/arrow-left.svg";
import call from "public/detail-icons/call.svg";
import location from "public/detail-icons/location.svg";
import people from "public/detail-icons/people.svg";
import document from "public/detail-icons/document.svg";
import food from "public/detail-icons/food_image.png";
import person from "public/detail-icons/person.svg";
import { useRouter } from "next/router";

function Booking() {
  const [bookingData, setBookingData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [peopleNum, setPeopleNum] = useState(1);
  const [meetingName, setMeetingName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const [amChecked, setAmChecked] = useState(false);
  const handleAmTime = () => {
    setAmChecked(true);
  };
  const handlePmTime = () => {
    setAmChecked(false);
  };
  const getDate = (date) => {
    setCurrentDate(date);
  };
  // const formatTime = () => {
  //   const formattedHours = hours < 10 ? `0${hours}` : hours;
  //   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  //   const adjustedHours = amChecked ? formattedHours : hours + 12;

  //   return `${adjustedHours}:${formattedMinutes}:00`;
  // };
  const formatPhoneNumber = (phoneNumber) => {
    const numbersOnly = phoneNumber.replace(/\D/g, "");
    const formattedNumber = numbersOnly.replace(
      /(\d{3})(\d{4})(\d{4})/,
      "$1-$2-$3"
    );

    return formattedNumber;
  };
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
          setIsLoading(false);
        } else {
          console.error("Failed to fetch data");
          window.alert("Please log in first.");
          router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const onSubmit = async () => {
    if (
      hours >= 0 &&
      hours <= 11 &&
      minutes >= 0 &&
      minutes <= 59 &&
      peopleNum >= 8 &&
      meetingName &&
      description &&
      isChecked
    ) {
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const adjustedHours = amChecked ? formattedHours : hours + 12;

      const bookTime = `${adjustedHours}:${formattedMinutes}:00`;

      const reservationData = {
        meeting_name: meetingName,
        date: currentDate,
        time: bookTime,
        people_num: peopleNum,
        description: description,
      };

      try {
        const token = localStorage.getItem("access-token");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DB_HOST}bookings/1/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(reservationData),
          }
        );

        if (response.ok) {
          console.log("Booked successfully");
          router.push(
            {
              pathname: "/bookingComplete",
              query: { reservationData: JSON.stringify(reservationData) },
            },
            "/bookingComplete"
          );
        } else {
          console.error("Failed to book");
          alert("로그인 후 이용해주세요.");
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Error during booking: ", error);
      }
    } else {
      console.log("Invalid reservation conditions");
      console.log(
        hours,
        minutes,
        peopleNum,
        meetingName,
        description,
        isChecked
      );
      alert("입력 형식을 확인해주세요.");
    }
  };

  if (isLoading) {
    return;
  }

  return (
    <div className="h-screen bg-[#f6f6f6] overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="w-[375px]">
        <div className="flex flex-row justify-between px-[24px] py-[15.5px]">
          <Link href="/home">
            <Image src={arrowleft} width={24} height={24} alt="icon" />
          </Link>
          <div className="text-[#FE8D00] text-[16px] font-semibold">
            예약하기
          </div>
          <div className="w-[24px] h-[16px]"></div>
        </div>
        <div className="flex flex-row items-center justify-around">
          <div className="flex flex-col">
            <div className="text-[20px] font-semibold">
              {bookingData.restaurant.name}
            </div>
            <div className="flex flex-row">
              <Image src={location} width={16} height={16} alt="icon" />
              <div className="text-[12px] font-medium">
                {bookingData.restaurant.location}
              </div>
            </div>
          </div>
          <Image src={food} width={49} height={49} alt="img" />
        </div>
        <div className="bg-[#ffffff] rounded-[13px] shadow-[0_3px_12px_0_rgba(254,141,0,0.2)] mx-[16px] my-[24px] h-[350px] p-[16px] flex flex-col justify-center items-center">
          <Calendar getDate={getDate} currentDate={currentDate} />
        </div>
        <div className="flex flex-row items-center justify-between p-[15px]">
          <div className="text-[18px] font-semibold">예약 시간</div>
          <div className="flex flex-row items-center">
            <div className="bg-[rgba(118,118,128,0.12)] w-[86px] h-[36px] rounded-[6px] flex flex-row items-center justify-center">
              <input
                type="number"
                min="0"
                max="11"
                step="1"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value, 10))}
                className="w-[30px] bg-transparent text-center text-[16px] font-semibold p-[5px]"
              />
              <div className="text-[16px] font-semibold p-[5px]">:</div>
              <input
                type="number"
                min="0"
                max="59"
                step="10"
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
                className="w-[30px] bg-transparent text-center text-[16px] font-semibold p-[5px]"
              />
            </div>
            <div className="bg-[rgba(118,118,128,0.12)] w-[101px] h-[36px] rounded-[9px] ml-[5px] flex flex-row items-center justify-center">
              <button
                className="w-[48px] h-[32px] rounded-[7px] text-[15px] font-bold flex justify-center items-center"
                onClick={handleAmTime}
                style={{
                  backgroundColor: amChecked ? "#ffffff" : "transparent",
                  boxShadow: amChecked
                    ? "0px 3px 1px 0px rgba(0,0,0,0.04)"
                    : "none",
                }}
              >
                AM
              </button>
              <button
                className="bg-[transparent] shadow-[0_2px_8px_0_rgba(0,0,0,0.14)] w-[48px] h-[32px] rounded-[7px] text-[15px] font-bold flex justify-center items-center"
                onClick={handlePmTime}
                style={{
                  backgroundColor: amChecked ? "transparent" : "#ffffff",
                  boxShadow: amChecked
                    ? "none"
                    : "0px 3px 1px 0px rgba(0,0,0,0.04)",
                }}
              >
                PM
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between p-[15px]">
          <div className="text-[18px] font-semibold">예약 인원</div>
          <div className="w-[90px] h-[36px] flex flex-row items-center justify-center bg-[rgba(118,118,128,0.12)] rounded-[6px]">
            <input
              type="number"
              min="8"
              value={peopleNum}
              onChange={(e) => setPeopleNum(parseInt(e.target.value, 10))}
              className="w-[50px] bg-transparent text-center text-[18px] font-semibold p-[5px]"
            />
            <Image src={person} width={20} height={20} alt="icon" />
          </div>
        </div>
        <div className="p-[15px]">
          <div className="text-[20px] font-semibold mb-[10px]">예약자 정보</div>
          <div className="bg-[#ffffff] rounded-[10px] shadow-[0_2px_8px_0_rgba(18,25,38,0.1)] h-[143px] p-[15px] flex flex-col">
            <div className="flex flex-row items-center justify-between pb-[5px]">
              <div className="text-[16px] font-semibold">
                {bookingData.user.user_nickname}
              </div>
            </div>
            <div className="flex flex-row items-center pb-[3px]">
              <Image
                src={call}
                width={16}
                height={16}
                className="mr-[5px]"
                alt="icon"
              />
              <div className="text-[12px] font-medium">
                {formatPhoneNumber(bookingData.user.phone_number)}
              </div>
            </div>
            <div className="flex flex-row items-center pb-[3px]">
              <Image
                src={people}
                width={16}
                height={16}
                className="mr-[5px]"
                alt="icon"
              />
              <input
                type="text"
                placeholder="단체 이름: "
                value={meetingName}
                onChange={(e) => setMeetingName(e.target.value)}
                className="placeholder:text-[12px]"
              />
            </div>
            <div className="flex flex-row pb-[3px]">
              <Image
                src={document}
                width={16}
                height={16}
                className="mr-[5px]"
                alt="icon"
              />
              <input
                type="textarea"
                placeholder="요청사항: "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="placeholder:text-[12px]"
              />
            </div>
          </div>
        </div>
        <div className="p-[15px]">
          <div className="text-[20px] font-semibold">유의사항 (재확인)</div>
          <div className="text-[12px] font-regular p-[8px] pb-[0px]">
            <ul className="list-disc p-[8px]">
              <li>
                당일 예약 취소 시 사장님의 보증금 정책에 따라 보증금을 돌려받지
                못할 수 있습니다.
              </li>
              <li>
                노쇼를 할 경우 보증금을 돌려받지 못하며, 식당 및 다른 고객에게
                피해를 줄 수 있습니다.
              </li>
              <li>
                사전 연락 없이 기존 예약 인원의 절반 이하의 인원으로 방문하실
                경우 보증금 환급에 제한이 있을 수 있습니다.
              </li>
              <li className="text-[13px]">
                <strong>예약 최종 확정 여부는 문자로 알려드립니다.</strong>
              </li>
            </ul>
            <br />
            <div>
              <p className="text-[14px] pb-[3px]">
                <b>서비스 약관 동의</b>
              </p>
              <p className="text-[13px]">&lt;예약 관련 정책&gt;</p>
              <ol className="list-decimal p-[8px]">
                <li>예약 관련 정책은 식당 측 이용자의 정책을 따릅니다.</li>
                <li>
                  유의사항을 어기시는 경우 보증금 환급 및 향후 비어버디 서비스
                  이용에 제약이 있을 수 있습니다.
                </li>
              </ol>
              <p className="text-[13px]">&lt;개인정보 수집 및 제공 동의&gt;</p>
              <ol className="list-decimal p-[8px]">
                <li>수집항목: 이름, 전화번호, 모임명</li>
                <li>
                  수집 및 이용목적: 식당 측 이용자와 예약자의 원활한 거래 진행,
                  민원 처리, 분쟁조정을 위한 기록 보존
                </li>
                <li>개인정보를 제공받는 자: 식당 측 이용자</li>
                <li>
                  개인정보를 제공받는 자의 이용목적: 식당 측 이용자와 예약자의
                  원활한 거래 진행, 민원 처리, 분쟁조정을 위한 기록 보존
                </li>
                <li>보관기간: 회원 탈퇴 시 파기</li>
                <li>
                  동의 거부 시: 이용자는 개인정보의 수집 및 이용 동의를 거부할
                  권리가 있으나, 이 경우 서비스 예약이 제한됩니다.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end p-[15px] pt-[0px]">
          <div className="flex flex-row items-center">
            <div className="text-[14px] font-regular">확인했습니다</div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckbox}
              className="h-[20px] w-[20px] accent-[#FE8D00] ml-[10px] "
            />
          </div>
        </div>
        <div className="p-[16px]">
          <div
            style={{
              backgroundColor: isChecked ? "#FE8D00" : "rgba(60,67,60,0.3)",
            }}
            onClick={onSubmit}
            className="h-[64px] rounded-full text-[#fff] text-[16px] font-extrabold flex justify-center items-center"
          >
            예약하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
