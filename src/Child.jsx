const Child = ({ sizeFunc }) => {
  const passData = (e) => {
    console.log(e.target.value, "value");
    sizeFunc(+e.target.value);
  };
  return (
    <>
      <input type="number" onChange={passData} />
    </>
  );
};

export default Child;
