import "./App.css";
import Child from "./Child";
import Color from "./Color";
import ThemeProvider from "./contexts/theme.context";

function App() {
  return (
    <ThemeProvider>
      <h2>App Component</h2>
      <Child />
    </ThemeProvider>
  );
}

export default App;
