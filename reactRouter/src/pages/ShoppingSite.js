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
import { Button } from "@mui/material";

export default function ShoppingSite() {
  let data = [
    {
      rasm: rasm1,
      nomi: "telefon",
      about: "mollitia quos dolor iure",
      catigory: "texnika",
    },
    {
      rasm: rasm2,
      nomi: "anor",
      about: "mollitia et deleniti suscipit, similique sed aperiam.",
      catigory: "meva",
    },
    {
      rasm: rasm3,
      nomi: "anor",
      about: "mollitia et deleniti suscipit, similique sed aperiam.",
      catigory: "meva",
    },
    {
      rasm: rasm5,
      nomi: "computer",
      about: "exercitationem amet.",
      catigory: "texnika",
    },
    {
      rasm: rasm6,
      nomi: "quloqchin",
      about: "adipisicing elit. Aspernatur",
      catigory: "accessuar",
    },
    {
      rasm: rasm7,
      nomi: "tarvuz",
      about: "magnam veritatis harum",
      catigory: "poliz",
    },
    {
      rasm: rasm8,
      nomi: "qovun",
      about: "facere laboriosam fuga alias nesciunt, quisquam",
      catigory: "poliz",
    },
    {
      rasm: rasm8_1,
      nomi: "tracker",
      about: "laborum quas sequi reiciendis, optio culpa",
      catigory: "avtomobil",
    },
    {
      rasm: rasm6,
      nomi: "malibu",
      about: "Lorem ipsum, dolor sit amet consectetur",
      catigory: "avtomobil",
    },
  ];
  let btnText = ["", "poliz", "accessuar", "texnika", "avtomobil"];
  let [filterData, setFilerData] = useState(data);

  function handleFilter(btn) {
    setFilerData(
      data.filter((item) =>
        item.catigory.toLowerCase().includes(btn.toLowerCase())
      )
    );
  }
  return (
    <>
      {btnText.map((btn, index) => (
        <Button
          key={index}
          variant="contained"
          style={{ margin: "10px" }}
          
          onClick={() => handleFilter(btn)}
        >
          {btn === "" ? "all" : btn}
        </Button>
      ))}
      <div className="shopping">
        {filterData.map((item, index) => (
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
                catigory: {item.catigory}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
