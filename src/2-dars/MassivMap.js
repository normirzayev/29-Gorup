import React, { useState } from "react";
import "./style.css";
import rasm1 from "../img/rasm1.jpg";
import rasm2 from "../img/rasm2.png";
import rasm3 from "../img/rasm3.jpg";
import rasm4 from "../img/rasm4.jpg";
import rasm5 from "../img/rasm5.jpg";
import rasm6 from "../img/rasm6.jpg";

export const MassivMap = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "nexia",
      img: rasm1,
      price: 7000,
      color: "white",
      year: 2016,
      count: 0,
    },
    {
      id: 2,
      name: "lacetti",
      img: rasm2,
      price: 7400,
      color: "white",
      year: 2012,
      count: 0,
    },
    {
      id: 3,
      name: "cobalt",
      img: rasm3,
      price: 8000,
      color: "silver",
      year: 2011,
      count: 0,
    },
    {
      id: 4,
      name: "tracker",
      img: rasm4,
      price: 21000,
      color: "black",
      year: 2021,
      count: 0,
    },
    {
      id: 5,
      name: "malibu 1",
      img: rasm5,
      price: 15000,
      color: "black",
      year: 2018,
      count: 0,
    },
    {
      id: 6,
      name: "malibu 2",
      img: rasm5,
      price: 25000,
      color: "red",
      year: 2021,
      count: 0,
    },
    {
      id: 7,
      name: "matiz",
      img: rasm6,
      price: 6000,
      color: "silver",
      year: 2016,
      count: 0,
    },
  ]);

  // massiv plus function
  function handlePlus(id) {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }

  let handleMinus = (id) => {
    setData(
      data.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <div className="card_box">
        {data.map((obj, index) => (
          <div className="card" key={index}>
            <figure>
              <img src={obj.img} alt={obj.name} />
            </figure>
            <div className="card_text">
              <div className="flex_between">
                <h1> {obj.name} </h1>
                <h2> color: {obj.color} </h2>
              </div>
              <div className="flex_between">
                <h2> year: {obj.year} </h2>
                <h3> price: {obj.price}$ </h3>
              </div>
              <div className="btn_box">
                <button className="plus" onClick={() => handlePlus(obj.id)}>
                  plus
                </button>
                <h1> {obj.count} </h1>
                <button className="minus" onClick={() => handleMinus(obj.id)}>
                  minus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
