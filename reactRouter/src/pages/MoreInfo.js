import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import { Link } from "react-router-dom";

export default function MoreInfo() {
  let { data } = useContext(DataContext);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <div key={index}>
              <h1> name: {item.name} </h1>
              <h2> name: {item.password} </h2>
            </div>
          );
        })
      ) : (
        <h1> no data... </h1>
      )}

      <Link to="/setting"> lastPage </Link>
    </div>
  );
}
