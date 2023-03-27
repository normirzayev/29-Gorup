import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to={"/about"}> about </Link>
        </li>
        <li>
          <Link to={"/moreInfo"}> more info </Link>
        </li>
        <li>
          <Link to={"/blog"}> blog </Link>
        </li>
      </ul>
    </div>
  );
}
