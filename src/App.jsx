import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Child from "./Child";
import Color from "./Color";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "CHANGE_FAV_NUMBER":
        return { ...state, favoriteNum: action.payload };
      case "CHANGE_COLOR":
        return { ...state, color: action.payload };
      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    color: "red",
    favoriteNum: 33,
  });
  function onFavNumChange() {
    dispatch({ type: "CHANGE_FAV_NUMBER", payload: 77 });
  }
  function onChangeColor() {
    dispatch({ type: "CHANGE_COLOR", payload: "green" });
  }
  return (
    <>
      <h2 style={{ color: state.color }}>Color: {state.color}</h2>
      <h2>Favorite Number: {state.favoriteNum}</h2>
      <button onClick={onFavNumChange}>Change Favorite number</button>
      <button onClick={onChangeColor}>Change Color</button>
    </>
  );
}

export default App;
