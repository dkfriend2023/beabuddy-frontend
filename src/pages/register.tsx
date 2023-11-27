import { useRouter } from "next/router";

import useInput from "../hooks/useInput";
import { useState } from "react";

function Signup() {
  const [userEmail, setUserEmail] = useInput("");
  const [userTel, setUserTel] = useInput("");
  const [userPW, setUserPW] = useInput("");
  const [checkUserPW, setCheckUserPW] = useInput("");
  const [userUni, setUserUni] = useInput("");

  const router = useRouter();

  async function onSignup(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (userPW === checkUserPW) {
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
            const accessToken = data.jwt_token.access_token;

            if (accessToken) {
              localStorage.setItem("access-token", accessToken);
            }

            router.push("/");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("비밀번호 확인이 일치하지 않습니다.");
    }
  }

  return (
    <div className="w-[100%] p-[24px]">
      <form
        action="#"
        method="POST"
        className="flex flex-col"
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
          inputMode="numeric"
          id="phone-number-auth"
          required
          placeholder="인증번호 입력"
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
  );
}

function Login() {
  const [userTel, setUserTel] = useInput("");
  const [userPW, setUserPW] = useInput("");

  const router = useRouter();

  async function onLogin(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}accounts/sign-in/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: userTel,
          password: userPW,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (Object.keys(data).length === 1) {
            alert(data.message);
          } else {
            const accessToken = data.jwt_token.access_token;

            if (accessToken) {
              localStorage.setItem("access-token", accessToken);
            }

            router.push("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[100%] p-[24px]">
      <form
        action="#"
        method="POST"
        onSubmit={onLogin}
        className="flex flex-col"
      >
        <label
          htmlFor="phone-number"
          className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
        >
          전화번호
        </label>
        <input
          type="tel"
          inputMode="tel"
          id="phone-number"
          minLength={11}
          maxLength={11}
          required
          value={userTel}
          onChange={setUserTel}
          placeholder="ex) 01012345678 (숫자만 입력해 주세요.)"
          className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
        />

        <label
          htmlFor="email"
          className="text-[#374151] text-[14px] font-semibold mb-[5px] ml-[10px]"
        >
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          required
          value={userPW}
          onChange={setUserPW}
          placeholder="비밀번호 입력"
          className="rounded-[12px] px-[12px] h-[48px] border border-[#bec5d1] text-[#000] placeholder:text-[#9ca3af] text-[12px] font-normal focus:outline-none focus:border focus:border-[#fe8d00] mb-[10px]"
        />

        <div className="flex justify-center items-center mt-[27px]">
          <button
            type="submit"
            className="bg-[#fe8d00] w-[256px] h-[49px] flex justify-center items-center text-[#ffffff] text-[14px] font-bold rounded-[12px]"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

function Register() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="overflow-x-hidden overflow-y-scroll flex justify-center">
      <div className="w-[375px] h-screen flex flex-col">
        <div className="w-[375px] bg-[#fff] rounded-t-[36px] flex flex-col items-center pt-[40px]">
          <div className="w-[100%] h-[59px] flex justify-between items-center">
            <div
              className={`w-[50%] h-[100%] flex justify-center items-center text-[${
                toggle ? "#fe8d00" : "#89909e"
              }] text-[16px] font-semibold border-b-[2px] ${
                toggle ? "border-[#fe8d00]" : "border-transparent"
              }`}
              onClick={() => {
                setToggle(true);
              }}
            >
              회원가입
            </div>
            <div
              className={`w-[50%] h-[100%] flex justify-center items-center text-[${
                toggle ? "#89909e" : "#fe8d00"
              }] text-[16px] font-semibold border-b-[2px] ${
                toggle ? "border-transparent" : "border-[#fe8d00]"
              }`}
              onClick={() => {
                setToggle(false);
              }}
            >
              로그인
            </div>
          </div>
          {toggle ? <Signup /> : <Login />}
        </div>
      </div>
    </div>
  );
}

export default Register;
