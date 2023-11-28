import Link from "next/link";

function SignupLoginToggle({ toggle }: { toggle: boolean }) {
  return (
    <div className="overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="w-[375px] flex flex-col">
        <div className="w-[375px] bg-[#fff] rounded-t-[36px] flex flex-col items-center pt-[40px]">
          <div className="w-[100%] h-[59px] flex justify-between items-center">
            <Link
              href="/signup"
              className={`w-[50%] h-[100%] flex justify-center items-center text-[${
                toggle ? "#fe8d00" : "#89909e"
              }] text-[16px] font-semibold border-b-[2px] ${
                toggle ? "border-[#fe8d00]" : "border-transparent"
              }`}
            >
              <div>회원가입</div>
            </Link>
            <Link
              href="/login"
              className={`w-[50%] h-[100%] flex justify-center items-center text-[${
                toggle ? "#89909e" : "#fe8d00"
              }] text-[16px] font-semibold border-b-[2px] ${
                toggle ? "border-transparent" : "border-[#fe8d00]"
              }`}
            >
              <div>로그인</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupLoginToggle;
