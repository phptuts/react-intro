import { useState } from "react";
import "./App.css";
import Example from "./Example";
import Fun from "./Fun";

function App() {
  let colorState = useState("green");
  let color = colorState[0];
  let setColor = colorState[1];
  const [favoriteNumber, setFavoriteNumber] = useState(7);
  const [show, setShow] = useState(true);
  const [degree, setDegree] = useState(0);
  let name = "Noah";
  let colors = ["red", "yellow", "green", "blue", "red"];
  let favoriteNumbers = [7, 77, 43, 90, 81];
  const ulStyles = {
    color: "red",
    backgroundColor: "blue",
  };

  function onRotate(e) {
    const newDegree = +e.target.value;
    setDegree(newDegree);
  }

  function hi() {
    setColor("red");
  }
  function favNumber() {
    setFavoriteNumber(11);
  }
  function toggleParagraph() {
    setShow((currentShow) => {
      return !currentShow;
    });
  }
  function onLeaveFavoriteColor() {
    console.log("leaving favorite colors");
  }

  function onChangeFavoriteNumber(e) {
    const number = +e.target.value;
    setFavoriteNumber(number);
  }

  return (
    <>
      <h1 className={show ? "awesome" : "cool"}>
        My favorite color is: {color}
      </h1>
      <h2 style={{ color: show ? "red" : "green" }}>
        Favorite Number {favoriteNumber}
      </h2>
      <input
        type="number"
        name=""
        value={favoriteNumber}
        onChange={onChangeFavoriteNumber}
        placeholder="Enter Favorite Number"
        id=""
      />
      <h2>hi, {name}</h2>
      <h2 style={{ transform: `rotateX(${degree}deg)` }}>Rotate</h2>
      <input
        type="range"
        onChange={onRotate}
        value={degree}
        min={0}
        max={360}
        step={1}
        id=""
      />
      {show && <p>Hi this is my paragraph</p>}
      <Fun name={color} />
      <Example color={color} />
      <ol className={show ? "happy" : "sad"} onMouseOver={hi}>
        {favoriteNumbers.map((n) => {
          return <li key={n}>{n}</li>;
        })}
      </ol>
      <ul
        style={{ color: "green", backgroundColor: color }}
        onMouseLeave={onLeaveFavoriteColor}
      >
        {colors.map((c, index) => {
          return <li key={index}>{c}</li>;
        })}
      </ul>
      <button onClick={favNumber}>Change Number</button>
      <button onClick={hi}>Hi</button>
      <button onClick={toggleParagraph}>
        {show ? "Hide" : "Show"} paragraph
      </button>
    </>
  );
}

export default App;
