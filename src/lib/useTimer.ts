import { useEffect, useState } from "react";

export const useTimer = ({ text = "type something" }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((state) => state + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const reset = () => {
    setSeconds(0);
  };

  return { seconds: `${text} ${seconds}`, reset };
};
