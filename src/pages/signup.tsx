import Link from "next/link";

function Signup() {
  return (
    <div className="bg-[#fff] overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="w-[375px] h-screen flex flex-col items-baseline justify-end bg-[#9ca3af]">
        <div className="w-[375px] h-[763px] bg-[#fff] rounded-t-[36px] flex flex-col items-center">
          <div className="w-[100%] h-[60px] flex justify-center items-center">
            <div className="w-[48px] h-[6px] bg-[#d2d4d8] rounded-[10px]"></div>
          </div>
          <div className="w-[100%] h-[59px] flex justify-between items-center">
            <div className="w-[50%] h-[100%] flex justify-center items-center text-[#fe8d00] text-[16px] font-semibold border-b-[2px] border-[#fe8d00]">
              회원가입
            </div>
            <div className="w-[50%] h-[100%] flex justify-center items-center text-[#89909e] text-[16px] font-semibold border-b-[2px] border-transparent">
              <Link href="/login">로그인</Link>
            </div>
          </div>
          <div className="w-[100%] p-[24px]">
            <form action="#" method="POST" className="flex flex-col">
              <label
                htmlFor="username"
                className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
              >
                사용자 이름
              </label>
              <input
                type="text"
                id="username"
                required
                placeholder="사용자 이름 입력"
                className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
              />

              <label
                htmlFor="phone-number"
                className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
              >
                전화번호
              </label>
              <input
                type="tel"
                id="phone-number"
                required
                placeholder="ex) 010-****-****"
                className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
              />

              <label
                htmlFor="phone-number-auth"
                className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
              >
                전화번호 인증
              </label>
              <input
                type="text"
                id="phone-number-auth"
                required
                placeholder="------"
                className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
              />

              <label
                htmlFor="password"
                className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                required
                placeholder="몇 자 이상"
                className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
              />

              <label
                htmlFor="password-check"
                className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                id="password-check"
                required
                placeholder="위에 입력한 비밀번호와 똑같이 입력해 주세요."
                className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
              />

              <label
                htmlFor="school"
                className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
              >
                소속 대학교
              </label>
              <input
                type="text"
                id="school"
                required
                placeholder="ex) 연세대학교"
                className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
              />

              <div className="flex justify-center items-center mt-[27px]">
                <button
                  type="submit"
                  className="bg-[#f4f4f4] w-[256px] h-[49px] flex justify-center items-center text-[#9ca3af] text-[14px] font-bold rounded-[12px]"
                >
                  회원가입
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
