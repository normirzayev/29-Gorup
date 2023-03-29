import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Blog({ array }) {
  let link = useNavigate();
  return (
    <div>
      <h1>blog</h1>
      <br />
      <br />
      {/* {array.map((val, index) => (
        <div key={index}>
          <Link to={`/about/${index}`}> {val} </Link> <br />
        </div>
      ))} */}
      {array.map((val, index) => (
        <div key={index}>
          <button onClick={() => link(`/about/${index}`)}> {val} </button>
          <br />
        </div>
      ))}
      <br />
      <br />
    </div>
  );
}
