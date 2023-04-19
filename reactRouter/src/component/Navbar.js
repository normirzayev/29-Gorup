import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>logo</h1>
        <ul>
          <li>
            <NavLink to={"/"}> home </NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}> blog </NavLink>
          </li>
          <li>
            <NavLink to={"contact"}> contact </NavLink>
          </li>
          <li>
            <NavLink to={"/setting"}> setting </NavLink>
          </li>
          <li>
            <NavLink to={"/moreInfo"}> moreInfo </NavLink>
          </li>
          <li>
            <NavLink to={"/shopping_site"}> shopping_site </NavLink>
          </li>
          <li>
            <NavLink to={"/api"}> api data </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
