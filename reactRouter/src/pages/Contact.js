// import React from "react";
// import rasm1 from "../img/rasm1.jpg";
// import rasm2 from "../img/rasm2.jpeg";
// import rasm3 from "../img/rasm3.jpg";
// import rasm5 from "../img/rasm5.jpg";
// import rasm6 from "../img/rasm6.jpg";
// import rasm7 from "../img/rasm7.jpg";
// import rasm8 from "../img/rasm8.jpg";
// import rasm8_1 from "../img/rasm8.webp";
// import { Button } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// export default function Contact() {
//   let rasmlar = [rasm1, rasm2, rasm3, rasm5, rasm6, rasm7, rasm8, rasm8_1];
//   return (
//     <div>
//       <div
//         className="homeSlider"
//         style={{
//           gridTemplateColumns: `repeat(${rasmlar.length}, 100%)`,
//         }}
//       >
//         {rasmlar.map((rasm, index) => {
//           return (
//             <figure key={index}>
//               <img src={rasm} />
//             </figure>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { Button } from "@mui/material";
import React, { useState } from "react";

export default function Contact() {
  let [tabNumber, setTabNumber] = useState(0);
  let tabData = [
    {
      btn_text: "fron-end",
      data: `Front-End ! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repellendus beatae facilis inventore. Alias dicta error odio
      quibusdam distinctio doloremque quo praesentium reiciendis! Vero
      saepe vitae quibusdam suscipit, facere in qui veniam minima dicta
      magnam praesentium assumenda officiis, deserunt illo perferendis.
      Quisquam error minima ab beatae?`,
    },
    {
      btn_text: "back-end",
      data: `Back-End ! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Velit officia fuga sed, delectus amet laborum odio repellat at
      aperiam architecto voluptatum fugit magni optio earum eos
      voluptates. Eaque, architecto quia.`,
    },
    {
      btn_text: "full-stack",
      data: `Full-Stack ! Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Praesentium perferendis dicta nulla numquam omnis aut.`,
    },
  ];

  function handleTanFunc(index) {
    setTabNumber(index);
  }
  return (
    <div>
      <section className="homeSec1">
        <div className="tabs">
          {tabData.map((btn, index) => {
            return (
              <Button
                key={btn.btn_text}
                color={index === tabNumber ? "success" : "primary"}
                variant="contained"
                onClick={() => handleTanFunc(index)}
              >
                {btn.btn_text}
              </Button>
            );
          })}
        </div>
        <div className="infos">
          <h1>{tabData[tabNumber].data}</h1>
        </div>
      </section>
    </div>
  );
}
