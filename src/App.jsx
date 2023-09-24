import { useEffect, useState } from "react";
import "./App.css";
import Child from "./Child";
import Color from "./Color";

function App() {
  const [size, setSize] = useState(20);
  const [color, setColor] = useState("#000");
  const [win, setWin] = useState(false);
  function changeSize(newSize) {
    setSize(newSize);
  }
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => {
        return s + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
      console.log("unloading");
    };
  }, []);

  useEffect(() => {
    console.log("this changed");
    if (color == "#000800" && size == 30) {
      setWin(true);
    }
  }, [size, color]);

  if (win) {
    return <h1>You Won</h1>;
  }

  return (
    <>
      <h2 style={{ fontSize: `${size}px`, color: color }}>{seconds}</h2>
      <Child sizeFunc={changeSize} />
      <Color setColor={setColor} />
    </>
  );
}

export default App;
