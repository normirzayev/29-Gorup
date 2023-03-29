import React, { useEffect, useRef } from "react";
export default function Home() {
  let text = useRef();

  useEffect(() => {
    text.current.addEventListener("click", () => {
      console.log("salom");
    });
  });

  let handleChange = () => {
    text.current.style.color = "red";
  };

  return (
    <div>
      <h1 ref={text}>salom</h1>
      <button onClick={handleChange}> change btn </button>
    </div>
  );
}
