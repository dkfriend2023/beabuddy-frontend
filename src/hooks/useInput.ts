import { useCallback, useState } from "react";

function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return [value, onChange];
}

export default useInput;
