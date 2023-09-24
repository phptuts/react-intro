const Color = ({ setColor }) => {
  function onChangeColor(e) {
    setColor(e.target.value);
  }

  return <input type="color" onChange={onChangeColor} name="" id="" />;
};

export default Color;
