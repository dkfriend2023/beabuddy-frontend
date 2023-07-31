import Image from "next/image";

import saved from "/public/saved.svg";
import menuimg_sample from "/public/menuimg-sample.png";

function SavedCard() {
  return (
    <div className="w-[343px] h-[169px] bg-[#fff] rounded-[10px] p-[18px] flex flex-col justify-between">
      <div className="flex justify-between items-start gap-[5px]">
        <div className="flex gap-[13px]">
          <Image
            src={menuimg_sample}
            width={91}
            height={91}
            alt="image"
            className="min-w-[91px] min-h-[91px]"
          />
          <div className="flex flex-col justify-start items-start gap-[4px]">
            <h1 className="block text-[#1f2937] text-[16px] font-semibold">짬뽕이 맛있는집</h1>
            <p className="block text-[#000] text-[10px] font-normal">
              햇살 가득한 야채들과 싱싱한 해물들로 손님들에게 대접하는 행복한 중국집
            </p>
            <p className="block text-[#6b7280] text-[10px] font-normal">
              연수구 센트럴로 160길 20 &#40;송도2동&#44; 연세대학교 남문&#41;
            </p>
          </div>
        </div>
        <Image src={saved} width={15} height={15} alt="icon" />
      </div>
      <div className="flex justify-center items-center">
        <textarea
          placeholder="나만의 메모를 남겨보세요."
          wrap="hard"
          className="bg-[#f9f9f9] w-full h-[27px] text-[10px] p-[8px] rounded-[10px] resize-none"
        ></textarea>
      </div>
    </div>
  );
}

export default SavedCard;
