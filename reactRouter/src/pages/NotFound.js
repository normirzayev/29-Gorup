import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {

  let back = useNavigate()

  return (
    <div className="not_found">
      <h1>NotFound</h1>
      {/* <Link to='/' > back to home </Link> */}
      <button onClick={() => back("/")}> back to home </button>
    </div>
  );
}
