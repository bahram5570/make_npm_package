import { useState as c, useEffect as m } from "react";
const a = ({ text: t = "type something" }) => {
  const [s, e] = c(0);
  m(() => {
    const n = setInterval(() => e((o) => o + 1), 1e3);
    return () => clearInterval(n);
  }, []);
  const r = () => {
    e(0);
  };
  return { seconds: `${t} ${s}`, reset: r };
};
export {
  a as useTimer
};
