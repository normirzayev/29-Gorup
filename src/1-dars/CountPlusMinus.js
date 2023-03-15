import React, { useState } from "react";

export default function CountPlusMinus() {
  const [count, setCount] = useState(0);
  let plusFunc = () => {
    if (count <= 9) {
      setCount(count + 1);
    } else {
      alert("son 10 dan oshmaydi");
    }
  };
  let minusFunc = () => {
    if (count > -5) {
      setCount(count - 1);
    } else {
      alert("son -5 dan kamaymaydi");
    }
  };
  return (
    <div style={{ ...styleDiv }}>
      <button onClick={plusFunc}>plus</button>
      <h1> {count} </h1>
      <button onClick={minusFunc}>minus</button>
    </div>
  );
}

let styleDiv = {
  display: "flex",
  color: "red",
  alignItems: "center",
};
