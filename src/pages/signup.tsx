import { useRouter } from "next/router";

import { useState } from "react";

import useInput from "../hooks/useInput";

import SignupLoginToggle from "../components/SignupLoginToggle";

function Signup() {
  const [userEmail, setUserEmail] = useInput("");
  const [userTel, setUserTel] = useInput("");
  const [userVerificationNum, setUserVerificationNum] = useInput("");
  const [userPW, setUserPW] = useInput("");
  const [checkUserPW, setCheckUserPW] = useInput("");
  const [userUni, setUserUni] = useInput("");

  const [verificationNum, setVerificationNum] = useState(0);
  const [verified, setVerified] = useState(false);

  const router = useRouter();

  async function onSignup(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (userPW === checkUserPW && verified === true) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}accounts/sign-up/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPW,
            uni: userUni,
            phone_number: userTel,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const accessToken = data.jwt_token.access_token;

            if (accessToken) {
              localStorage.setItem("access-token", accessToken);
            }

            alert("회원가입이 완료되었습니다.");

            router.push("/home");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("비밀번호 확인이 일치하지 않습니다.");
    }
  }

  async function getVerification() {
    alert("인증번호가 전송되었습니다.");
    try {
      await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}accounts/sms/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: String(userTel),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const num = data.auth_num;

          setVerificationNum(num);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function verifyProcess() {
    if (String(verificationNum) === userVerificationNum) {
      setVerified(true);
      alert("전화번호 인증이 완료되었습니다.");
    } else {
      alert("인증번호가 일치하지 않습니다.");
    }
  }

  return (
    <>
      <SignupLoginToggle toggle={true} />
      <div className="w-[100%] p-[24px]">
        <form
          action="#"
          method="POST"
          className="flex flex-col w-[100%]"
          onSubmit={onSignup}
        >
          <label
            htmlFor="email"
            className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
          >
            사용자 이메일 입력
          </label>
          <input
            type="email"
            inputMode="email"
            id="email"
            required
            placeholder="사용자 이메일 입력"
            value={userEmail}
            onChange={setUserEmail}
            className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
          />

          <label
            htmlFor="phone-number"
            className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
          >
            전화번호
          </label>
          <div className="flex justify-between item-center">
            <input
              type="tel"
              inputMode="tel"
              id="phone-number"
              minLength={11}
              maxLength={11}
              required
              placeholder="ex) 01012345678 (숫자만 입력해 주세요.)"
              value={userTel}
              onChange={setUserTel}
              className="rounded-[12px] px-[12px] h-[48px] w-[70%] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
            />
            <button
              type="button"
              className="rounded-[10px] w-[27%] h-[46px] bg-[#fe8d00] text-[#ffffff] text-[12px] font-bold"
              onClick={getVerification}
            >
              인증번호 받기
            </button>
          </div>

          <label
            htmlFor="phone-number-auth"
            className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
          >
            전화번호 인증
          </label>
          <div className="flex justify-between item-center">
            <input
              type="text"
              inputMode="numeric"
              id="phone-number-auth"
              required
              placeholder="인증번호 입력"
              value={userVerificationNum}
              onChange={setUserVerificationNum}
              className="rounded-[12px] px-[12px] h-[48px] w-[70%] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
            />
            <button
              type="button"
              className="rounded-[10px] w-[27%] h-[46px] bg-[#fe8d00] text-[#ffffff] text-[12px] font-bold"
              onClick={verifyProcess}
            >
              인증하기
            </button>
          </div>

          <p className="text-[#9098a5] text-[12px] font-semibold ml-[10px] mb-[5px]">
            {verified
              ? "전화번호 인증이 완료되었습니다."
              : "전화번호 인증이 필요합니다."}
          </p>

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
            minLength={8}
            placeholder="8자 이상"
            value={userPW}
            onChange={setUserPW}
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
            value={checkUserPW}
            onChange={setCheckUserPW}
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
            pattern="[ㄱ-힣]+대학교$"
            placeholder="ex) 연세대학교 (학교명 전체를 입력해 주세요.)"
            value={userUni}
            onChange={setUserUni}
            className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
          />

          <div className="flex justify-center items-center mt-[27px]">
            <button
              type="submit"
              className="bg-[#fe8d00] w-[256px] h-[49px] flex justify-center items-center text-[#ffffff] text-[14px] font-bold rounded-[12px]"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
