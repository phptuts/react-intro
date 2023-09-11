import "./App.css";

function App() {
  let color = "green";
  let name = "Noah";
  let colors = ["red", "yellow", "green", "blue", "red"];
  let favoriteNumbers = [7, 77, 43, 90, 81];
  function hi() {
    alert("hi");
  }
  function onLeaveFavoriteColor() {
    console.log("leaving favorite colors");
  }
  return (
    <>
      <h1>My favorite color is: {color}</h1>
      <h2>hi, {name}</h2>
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
      <button onClick={hi}>Hi</button>
    </>
  );
}

export default App;
