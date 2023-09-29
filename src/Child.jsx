import Color from "./Color";

const Child = () => {
  return (
    <>
      <div style={{ border: "solid black 2px" }}>
        <h2>Child Component</h2>
        <Color />
      </div>
    </>
  );
};

export default Child;
