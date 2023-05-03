import axios from "axios";
import React, { useEffect, useState } from "react";

export const Context = React.createContext();
export function ContextFunc({ children }) {
  const [malumotlar, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const [dataInput, setDataInput] = useState({
    name: "",
  });

  useEffect(() => {
    setLoad(true);
    axios("https://ijarauz.pythonanywhere.com/product/region/")
      .then((apiData) => {
        setData(apiData.data);
      })
      .catch((err) => console.log(err))
      .finally(setLoad(false));
  }, []);

  return (
    <Context.Provider
      value={{ malumotlar, setData, setLoad, dataInput, setDataInput }}
    >
      {children}
    </Context.Provider>
  );
}
