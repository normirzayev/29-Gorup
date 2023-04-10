import { useState } from "react";
import CountPlusMinus from "./CountPlusMinus";
import "./style.css";
function Main() {
  const [nav, setNav] = useState(true);

  function navbarFunc() {
    setNav(!nav);
    console.log(nav);
  }

  let massivNumbers = [];
  for (let i = 1; i <= 33; i++) {
    massivNumbers.push(i);
  }

  function consoleTest(text) {
    console.log(text);
  }
  return (
    <>
      <h1 className={nav ? "textH1" : "textH1 textH1Active"}> App </h1>
      <div>
        <button onClick={() => consoleTest(massivNumbers[2])}> click </button>
      </div>
      <CountPlusMinus />
      <button onClick={navbarFunc}> click {nav ? "true" : "false"} </button>
    </>
  );
}

export default Main;
