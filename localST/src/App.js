import { NavLink, Route, Routes, json } from "react-router-dom";
import Form from "./pages/Form";
import Table from "./pages/Table";
import "./style/index.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
function App() {
  axios.defaults.baseURL = "https://ijarauz.pythonanywhere.com/product/region/";
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  let [data, setData] = useState([]);
  let [value, setValue] = useState({
    id: "",
    userName: "",
    password: "",
    address: "",
    email: "",
  });
  function clearValue() {
    setValue({
      id: "",
      userName: "",
      password: "",
      address: "",
      email: "",
    });
  }

  const corsOptions = {
    origin: "http://localhost:3001",
    credentials: true,
    optionSuccessStatus: 200,
  };
  useEffect(() => {
    axios("https://ijarauz.pythonanywhere.com/product/region/").then((res) =>
      console.log(res)
    );
  }, []);

  return (
    <div className="app">
      <div className="linklar">
        <Button variant="contained">
          <NavLink
            to={"/form"}
            onClick={clearValue}
            style={{ color: "white", textDecoration: "none" }}
          >
            form
          </NavLink>
        </Button>
        <Button variant="contained">
          <NavLink
            to={"/table"}
            onClick={clearValue}
            style={{ color: "white", textDecoration: "none" }}
          >
            table
          </NavLink>
        </Button>
      </div>
      <Routes>
        <Route
          path="/form"
          element={
            <Form
              data={data}
              value={value}
              setValue={setValue}
              setData={setData}
            />
          }
        />
        <Route
          path="/table"
          element={<Table data={data} setValue={setValue} />}
        />
      </Routes>
    </div>
  );
}
export default App;
