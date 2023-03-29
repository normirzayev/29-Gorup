import React from "react";
import { useParams } from "react-router-dom";

export default function About({ array }) {
  let link = useParams();
  console.log(link.raqam);
  return (
    <div>
      <br />
      <br />
      <h1>about</h1>
      <h2> {array[link.raqam]} </h2>
      <br />
      <br />
    </div>
  );
}
