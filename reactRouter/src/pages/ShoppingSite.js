import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import rasm1 from "../img/rasm1.jpg";
import rasm2 from "../img/rasm2.jpeg";
import rasm3 from "../img/rasm3.jpg";
import rasm5 from "../img/rasm5.jpg";
import rasm6 from "../img/rasm6.jpg";
import rasm7 from "../img/rasm7.jpg";
import rasm8 from "../img/rasm8.jpg";
import rasm8_1 from "../img/rasm8.webp";
import { Box, Button, Radio, Slider } from "@mui/material";

export default function ShoppingSite() {
  const [value, setValue] = useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let data = [
    {
      rasm: rasm1,
      nomi: "telefon",
      about: "mollitia quos dolor iure",
      catigory: "texnika",
      color: "black",
      narx: 150,
    },
    {
      rasm: rasm2,
      nomi: "anor",
      about: "mollitia et deleniti suscipit, similique sed aperiam.",
      catigory: "meva",
      color: "red",
      narx: 20,
    },
    {
      rasm: rasm3,
      nomi: "banan",
      about: "mollitia et deleniti suscipit, similique sed aperiam.",
      catigory: "meva",
      color: "yellow",
      narx: 32,
    },
    {
      rasm: rasm5,
      nomi: "computer",
      about: "exercitationem amet.",
      catigory: "texnika",
      color: "blue",
      narx: 180,
    },
    {
      rasm: rasm6,
      nomi: "quloqchin",
      about: "adipisicing elit. Aspernatur",
      catigory: "accessuar",
      color: "yellow",
      narx: 40,
    },
    {
      rasm: rasm7,
      nomi: "tarvuz",
      about: "magnam veritatis harum",
      catigory: "poliz",
      color: "green",
      narx: 8,
    },
    {
      rasm: rasm8,
      nomi: "qovun",
      about: "facere laboriosam fuga alias nesciunt, quisquam",
      catigory: "poliz",
      color: "yellow",
      narx: 15,
    },
    {
      rasm: rasm8_1,
      nomi: "tracker",
      about: "laborum quas sequi reiciendis, optio culpa",
      catigory: "avtomobil",
      color: "black",
      narx: 200,
    },
    {
      rasm: rasm6,
      nomi: "malibu",
      about: "Lorem ipsum, dolor sit amet consectetur",
      catigory: "avtomobil",
      color: "white",
      narx: 190,
    },
  ];
  let btnCatigory = ["", "poliz", "accessuar", "texnika", "avtomobil"];
  let btnRang = ["red", "blue", "yellow", "black", "white", "green"];
  let [filterData, setFilerData] = useState(data);
  let [catigoryData, setCatigoryData] = useState("");
  let [colorData, setColorData] = useState("");
  let filterFunc = () => {
    setFilerData(
      data.filter((item) => {
        if (
          item.color.toLowerCase().includes(colorData.toLowerCase()) &&
          item.catigory.toLowerCase().includes(catigoryData.toLowerCase()) &&
          item.narx > value[0] &&
          item.narx < value[1]
        ) {
          return item;
        }
      })
    );
  };
  return (
    <>
      <Button onClick={filterFunc}> filter btn </Button>
      {btnCatigory.map((btn, index) => (
        <Button
          key={index}
          variant="contained"
          style={{ margin: "10px" }}
          onClick={() => setCatigoryData(btn)}
        >
          {btn === "" ? "all" : btn}
        </Button>
      ))}
      <br />
      {btnRang.map((btn) => {
        return (
          <input
            key={btn}
            type="radio"
            name="rang"
            style={{
              boxShadow: `0 0 10px ${btn}`,
              width: "30px",
              height: "30px",
            }}
            onChange={() => {
              setColorData(btn);
            }}
          />
        );
      })}
      <Button onClick={() => setColorData("")}> clear color </Button>
      <br />
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          max={200}
        />
      </Box>

      <div className="shopping">
        {filterData.length > 0 ? (
          filterData.map((item, index) => (
            <Card sx={{ width: 345 }} key={index}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.rasm}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.nomi}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.about}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  color: {item.color}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  catigory: {item.catigory}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  narx: {item.narx}$
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <h1> No Data... </h1>
        )}
      </div>
    </>
  );
}
