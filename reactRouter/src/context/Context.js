import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
  let link = useNavigate();
  let link1 = useNavigate();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("localST")) || []
  );

  function localST_ref() {
    setData(JSON.parse(localStorage.getItem("localST")) || []);
  }

  let nextPage = useNavigate();
  const [inputData, setInputData] = useState({
    id: "",
    nomi: "",
    haqida: "",
    soni: 0,
  });

  let clearInput = () => {
    setInputData({
      id: "",
      nomi: "",
      haqida: "",
      soni: 0,
    });
  };

  let getValueInput = (e) => {
    // console.log(e.target.value);
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  let sendLocalData = (e) => {
    e.preventDefault();
    // agar inputdatani ichida id bolsa mahsulotni tahrirlaydi bolmasa mahsulot qoshadi
    if (inputData.id === "") {
      // console.log({ ...inputData, id: new Date().getTime() });
      if (localStorage.getItem("localST")) {
        localStorage.setItem(
          "localST",
          JSON.stringify([
            // ...JSON.parse(localStorage.getItem("localST")),
            { ...inputData, id: new Date().getTime() },
            ...data,
          ])
        );
      } else {
        localStorage.setItem(
          "localST",
          JSON.stringify([{ ...inputData, id: new Date().getTime() }])
        );
      }
    } else {
      localStorage.setItem(
        "localST",
        JSON.stringify(
          data.map((val) => (val.id === inputData.id ? inputData : val))
        )
      );
    }
    link("/moreInfo");
    clearInput();
    localST_ref();
  };

  // mahsulot localStorage dan ochirish
  let handleDel = (id) => {
    // console.log(id);
    localStorage.setItem(
      "localST",
      JSON.stringify(data.filter((elem) => elem.id !== id))
    );
    localST_ref();
  };

  // mahsulotlarni tahrirlash
  let handleEdit = (item) => {
    setInputData(item);
    link1("/setting");
  };

  // localStorage dagi mahsulotni sonini oshirish yoki kamaytirish

  let handlePlus = (item) => {
    localStorage.setItem(
      "localST",
      JSON.stringify(
        data.map((elem) =>
          elem.id === item.id ? { ...elem, soni: elem.soni + 1 } : elem
        )
      )
    );
    localST_ref();
  };

  let handleMinus = (item) => {
    localStorage.setItem(
      "localST",
      JSON.stringify(
        data.map((elem) => {
          return elem.id === item.id ? { ...elem, soni: elem.soni - 1 } : elem;
        })
      )
    );
    localST_ref();
  };

  return (
    <DataContext.Provider
      value={{
        getValueInput,
        data,
        sendLocalData,
        inputData,
        handleDel,
        handleEdit,
        handlePlus,
        handleMinus,
        clearInput
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
