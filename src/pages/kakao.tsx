import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

import { KAKAO_REST_API_KEY } from "../utils";

function KakaoLogin() {
  const router = useRouter();
  const code = router.query.code;
  //   const code = window.location.search.split("=")[1];
  console.log(code);

  const redirect_uri = "http://localhost:3000/kakao";

  async function getToken() {
    try {
      await fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: `grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${redirect_uri}&code=${code}`,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            console.log("data access token has been found!");
            console.log(data.access_token);
          } else {
            router.push("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (code) {
      getToken();
    }
  }, [code]);

  return <div>kakao login 토큰 발급까지 success!!</div>;
}

export default KakaoLogin;
