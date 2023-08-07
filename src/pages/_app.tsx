import "../styles/globals.css";
import type { AppProps } from "next/app";
import { KAKAO_JAVASCRIPT_KEY } from "../utils";
import Head from "next/head";

declare global {
  interface Window {
    Kakao: any;
  }
}

export function kakaoInit() {
  const kakao = window.Kakao;
  kakao.init(KAKAO_JAVASCRIPT_KEY);
  return kakao;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js"
          integrity="sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh"
          crossOrigin="anonymous"
          onLoad={kakaoInit}
        />
      </Head>
      <Component className="" {...pageProps} />{" "}
    </>
  );
}
