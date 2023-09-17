import { useState } from "react";
import "./App.css";
import Example from "./Example";
import Fun from "./Fun";

function App() {
  let colorState = useState("green");
  let color = colorState[0];
  let setColor = colorState[1];
  const [favoriteNumber, setFavoriteNumber] = useState(7);
  let name = "Noah";
  let colors = ["red", "yellow", "green", "blue", "red"];
  let favoriteNumbers = [7, 77, 43, 90, 81];
  function hi() {
    setColor("blue" + Math.random());
  }
  function favNumber() {
    setFavoriteNumber(11);
  }
  function onLeaveFavoriteColor() {
    console.log("leaving favorite colors");
  }
  return (
    <>
      <h1>My favorite color is: {color}</h1>
      <h2>Favorite Number {favoriteNumber}</h2>
      <h2>hi, {name}</h2>
      <Fun name={color} />
      <Example color={color} />
      <ol onMouseOver={hi}>
        {favoriteNumbers.map((n) => {
          return <li key={n}>{n}</li>;
        })}
      </ol>
      <ul onMouseLeave={onLeaveFavoriteColor}>
        {colors.map((c, index) => {
          return <li key={index}>{c}</li>;
        })}
      </ul>
      <button onClick={favNumber}>Change Number</button>
      <button onClick={hi}>Hi</button>
    </>
  );
}

export default App;
