import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  let nextPage = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    password: "",
  });

  let clearInput = () => {
    setInputData({
      name: "",
      password: "",
    });
  };

  let getValueInput = (e) => {
    // console.log(e.target.value);
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  let sendData = (e) => {
    e.preventDefault();
    // console.log(inputData);
    setData([...data, inputData]);
    // console.log(data);
    nextPage("/moreInfo");
    clearInput()
  };

  return (
    <DataContext.Provider value={{ getValueInput, sendData, data }}>
      {children}
    </DataContext.Provider>
  );
}
