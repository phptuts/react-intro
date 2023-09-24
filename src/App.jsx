import { useState } from "react";
import "./App.css";
import Child from "./Child";
import Color from "./Color";

function App() {
  const [size, setSize] = useState(20);
  const [color, setColor] = useState("#000");
  function changeSize(newSize) {
    setSize(newSize);
  }

  return (
    <>
      <h2 style={{ fontSize: `${size}px`, color: color }}>Parent</h2>
      <Child sizeFunc={changeSize} />
      <Color setColor={setColor} />
    </>
  );
}

export default App;
