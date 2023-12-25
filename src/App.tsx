// import { useTimer } from "./lib/useTimer";
import { useTimer } from "make_npm_package";

function App() {
  const { seconds, reset } = useTimer();

  return (
    <>
      <button onClick={reset}>Reset</button>
      <p>{seconds}</p>
    </>
  );
}

export default App;
