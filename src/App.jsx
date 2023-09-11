import "./App.css";

function App() {
  let color = "green";
  let name = "Noah";
  let colors = ["red", "yellow", "green", "blue", "red"];
  let favoriteNumbers = [7, 77, 43, 90, 81];
  return (
    <>
      <h1>My favorite color is: {color}</h1>
      <h2>hi, {name}</h2>
      <ol>
        {favoriteNumbers.map((n) => {
          return <li key={n}>{n}</li>;
        })}
      </ol>
      <ul>
        {colors.map((c, index) => {
          return <li key={index}>{c}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
