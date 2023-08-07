import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import { kakaoInit } from "../_app";

import textlogo from "/public/logo/textlogo.svg";
import kakaologo from "/public/kakaologo.svg";

function WelcomePage() {
  const kakaoLogin = async () => {
    const kakao = kakaoInit();
    kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/kakao",
    });
    // kakao.Auth.login({
    //   success: () => {
    //     kakao.API.request({
    //       url: "/v2/user/me",
    //       success: (res: any) => {
    //         console.log(res);
    //         Router.push("/kakao");
    //       },
    //       fail: (error: any) => {
    //         console.log(error);
    //       },
    //     });
    //   },
    //   fail: (error: any) => {
    //     console.log(error);
    //   },
    // });
  };

  return (
    <div className="bg-[#fff] overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="w-[375px] p-[16px]">
        <div className="flex justify-center pt-[200px] pb-[125px]">
          <Image src={textlogo} width={200} height={63} alt="img" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[#1F2937] text-[20px] font-bold text-center pb-[8px]">
            환영합니다!
          </div>
          <div className="text-[#4B5563] text-[11px] font-normal text-center w-[300px] leading-5 pb-[50px]">
            전화 통화 없이 식당 정보 확인, 예약, 포인트 적립까지 할 수 있는 대학생 타겟 모바일 식당
            단체예약 플랫폼, <strong>비어버디</strong>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-[8px]">
          <button
            className="bg-[#fee500] font-bold w-[256px] h-[49px] rounded-[12px] text-[#000000]/80 text-[14px] flex justify-center items-center gap-[10px]"
            onClick={kakaoLogin}
          >
            <Image src={kakaologo} width={15} height={15} alt="logo" />
            카카오로 시작하기
          </button>
          <button className="block bg-[#fe8d00] font-bold w-[256px] h-[49px] rounded-[12px] text-[#FFF] text-[14px]">
            회원가입
          </button>
          <button className="block bg-[#fabf78] font-bold w-[256px] h-[49px] rounded-[12px] text-[#E06738] text-[14px]">
            로그인
          </button>
        </div>
        <div className="mt-[34px] font-normal text-[#242423] text-[10px] flex justify-center items-start">
          회원가입 및 로그인 시&nbsp;
          <Link className="text-[#fe8d00]" href="#">
            사용자 약관
          </Link>
          &nbsp;및&nbsp;
          <Link className="text-[#fe8d00]" href="#">
            개인정보보호
          </Link>
          &nbsp;동의한 것으로...
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
