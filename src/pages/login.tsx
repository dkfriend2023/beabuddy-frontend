import { useRouter } from "next/router";

import useInput from "../hooks/useInput";

import SignupLoginToggle from "../components/SignupLoginToggle";

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

            router.push("/home");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SignupLoginToggle toggle={false} />
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
    </>
  );
}

export default Login;
