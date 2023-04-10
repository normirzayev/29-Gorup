import React, { useState } from "react";
import rasm1 from "../img/rasm1.jpg";
import rasm2 from "../img/rasm2.jpeg";
import rasm3 from "../img/rasm3.jpg";
import rasm5 from "../img/rasm5.jpg";
import rasm6 from "../img/rasm6.jpg";
import rasm7 from "../img/rasm7.jpg";
import rasm8 from "../img/rasm8.jpg";
import rasm8_1 from "../img/rasm8.webp";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Home() {
  let rasmlar = [rasm1, rasm2, rasm3, rasm5, rasm6, rasm7, rasm8, rasm8_1];
  let [sliderNumber, setSliderNumber] = useState(0);

  // sliderni orqaga o'tkazish uchun function
  let handleSliderLast = () => {
    setSliderNumber(sliderNumber - 1);
    if (sliderNumber <= 0) {
      setSliderNumber(rasmlar.length - 1);
    }
  };
  // sliderni oldiga o'tkazish uchun function
  let handleSliderNext = () => {
    setSliderNumber(sliderNumber + 1);
    if (sliderNumber >= rasmlar.length - 1) {
      setSliderNumber(0);
    }
  };

  return (
    <div className="home">
      <Button variant="contained" color="success" onClick={handleSliderLast}>
        <ArrowBackIcon />
      </Button>
      <div
        className="homeSlider"
        style={{
          gridTemplateColumns: `repeat(${rasmlar.length}, 100%)`,
        }}
      >
        {rasmlar.map((rasm, index) => {
          return (
            <figure
              key={index}
              style={{
                transform: `translate(calc(${sliderNumber}* -100%))`,
                transition: "0.5s ease-in-out",
                opacity: index === sliderNumber ? "1" : "0",
              }}
            >
              <img src={rasm} />
            </figure>
          );
        })}
      </div>
      <Button variant="contained" color="primary" onClick={handleSliderNext}>
        <ArrowForwardIcon />
      </Button>
    </div>
  );
}
