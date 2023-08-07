import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

interface ResponseType {
  ok: boolean;
  error?: any;
}

function Kakao() {
  const router = useRouter();
  const { code, error } = router.query;
}

export default Kakao;
