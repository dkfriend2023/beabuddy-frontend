import Image from "next/image";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "../components/Calendar";

import arrowleft from "public/detail-icons/arrow-left.svg";
import call from "public/detail-icons/call.svg";
import location from "public/detail-icons/location.svg";
import pencil from "public/detail-icons/pencil.svg";
import people from "public/detail-icons/people.svg";
import document from "public/detail-icons/document.svg";
import food from "public/detail-icons/food_image.png";
import person from "public/detail-icons/person.svg";

function Booking() {
  const [isChecked, setIsChecked] = useState(false);
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
  const [date, setDate] = useState(new Date());
  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className="h-screen bg-[#f6f6f6] overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="w-[375px]">
        <div className="flex flex-row justify-between px-[24px] py-[15.5px]">
          <Image src={arrowleft} width={24} height={24} alt="icon" />
          <div className="text-[#FE8D00] text-[16px] font-semibold">
            예약하기
          </div>
          <div className="w-[24px] h-[16px]"></div>
        </div>
        <div className="flex flex-row items-center justify-around">
          <div className="flex flex-col">
            <div className="text-[20px] font-semibold">설레임삼겹살</div>
            <div className="flex flex-row">
              <Image src={location} width={16} height={16} alt="icon" />
              <div className="text-[12px] font-medium">
                연세로 몇길 55 무슨동 무슨위치
              </div>
            </div>
          </div>
          <Image src={food} width={49} height={49} alt="img" />
        </div>
        <div className="bg-[#ffffff] rounded-[13px] shadow-[0_3px_12px_0_rgba(254,141,0,0.2)] mx-[16px] my-[24px] h-[350px] p-[16px] flex flex-col justify-center items-center">
          <Calendar />
          {/* 
                    <Calendar
                        onChange={handleDateChange}
                        value={date}
                        prev2Label={null}
                        next2Label={null}
                        minDate={new Date()}
                        prevLabel={<Image src={backward} width={10} height={18} alt="icon" />}
                        nextLabel={<Image src={forward} width={10} height={18} alt="icon" />}
                    />*/}
        </div>
        <div className="flex flex-row items-center justify-between p-[15px]">
          <div className="text-[18px] font-semibold">예약 시간</div>
          <div className="flex flex-row items-center">
            <div className="bg-[rgba(118,118,128,0.12)] w-[86px] h-[36px] rounded-[6px] flex flex-row items-center justify-center">
              <input
                type="number"
                min="1"
                max="12"
                step="1"
                className="w-[30px] bg-transparent text-center text-[16px] font-semibold p-[5px]"
              />
              <div className="text-[16px] font-semibold p-[5px]">:</div>
              <input
                type="number"
                min="0"
                max="59"
                step="10"
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
              min="1"
              className="w-[50px] bg-transparent text-center text-[18px] font-semibold p-[5px]"
            />
            <Image src={person} width={20} height={20} alt="icon" />
          </div>
        </div>
        <div className="p-[15px]">
          <div className="text-[20px] font-semibold mb-[10px]">예약자 정보</div>
          <div className="bg-[#ffffff] rounded-[10px] shadow-[0_2px_8px_0_rgba(18,25,38,0.1)] h-[143px] p-[10px] flex flex-col">
            <div className="flex flex-row items-center justify-between pb-[5px]">
              <div className="text-[16px] font-semibold">박민성</div>
              <Image src={pencil} width={20} height={20} alt="icon" />
            </div>
            <div className="flex flex-row items-center pb-[3px]">
              <Image
                src={call}
                width={16}
                height={16}
                className="mr-[5px]"
                alt="icon"
              />
              <div className="text-[12px] font-medium">010-9942-7360</div>
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
                className="placeholder:text-[12px]"
              />
            </div>
          </div>
        </div>
        <div className="p-[15px]">
          <div className="text-[20px] font-semibold">유의사항 (재확인)</div>
          <div className="text-[10px] font-regular p-[7px] pb-[0px]">
            음 노쇼하지말고 음 뭐시기
            뭐시기뭐시기뭐시기뭐시기뭐시기뭐시기뭐시기이이 돈 안돌려줄거구 웅웅
            돈 안돌려줄거구 웅웅돈 안돌려줄거구 웅웅돈 안돌려줄거
            난지금배고프구졸리구덥구에어컨틀고싶은데전기세는아까운뭐그런상태라고할
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
