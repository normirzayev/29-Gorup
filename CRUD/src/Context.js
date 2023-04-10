import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const DataContext = React.createContext();
export default function ContextProvider({ children }) {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("localUSer")) || []
  );
  const [likeData, setLikeData] = useState(
    JSON.parse(localStorage.getItem("localUSer")) || []
  );
  let portalMap = useNavigate();
  let portalEdit = useNavigate();
  function localRefresh() {
    setLocalData(JSON.parse(localStorage.getItem("localUSer")) || []);
  }

  function localRefreshs() {
    setLikeData(JSON.parse(localStorage.getItem("localUSer")) || []);
  }


  const [inputData, setInputData] = useState([{
    id: "",
    name: "",
    about: "",
    narxi: "",
    aksiya: "",
    soni: "",
    rasm: "",
  }]);

  function inputClear() {
    setInputData({
      id: "",
      name: "",
      about: "",
      narxi: "",
      aksiya: "",
      soni: "",
      rasm: "",
    });
  }

  let getInputData = (e) => {
    let { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  let sendData = () => {
    if (inputData.id === "") {
      if (localStorage.getItem("localUSer")) {
        localStorage.setItem(
          "localUSer",
          JSON.stringify([
            ...localData,
            { ...inputData, id: new Date().getTime() },
          ])
        );
      } else {
        localStorage.setItem(
          "localUSer",
          JSON.stringify([{ ...inputData, id: new Date().getTime() }])
        );
      }
    } else {
      localStorage.setItem(
        "localUSer",
        JSON.stringify(
          localData.map((elem) => (elem.id === inputData.id ? inputData : elem))
        )
      );
    }
    portalMap("/about");
    inputClear();
    localRefresh();
  };

  let ochirish = (id) => {
    localStorage.setItem(
      "localUSer",
      JSON.stringify(localData.filter((elem) => elem.id !== id))
    );
    localRefresh();
  };

  let editFunc = (item) => {
    setInputData(item);
    portalEdit("/");
  };

  const [sanoq, setSanoq] = useState(0)

  let plus = () => {
     if(sanoq < 10) {
      setSanoq(sanoq + 1)
     }
     else {
      alert("10dan katta son bo'lmaydi")
     }
  }
  let minus = () => {
      if(sanoq > 0) {
       setSanoq(sanoq - 1)
      }
      else {
          alert("0dan kichik son bo'lmaydi")
      }
   }

   let like = (item) => {
    setInputData(
      inputData.map((elem) => elem.id === item.id ? {...elem, like: !elem.like} : elem)
    );
    portalMap("/blog");
    inputClear();
    localRefreshs();
  };

  return (
      <DataContext.Provider
        value={{
          getInputData,
          inputData,
          sendData,
          localData,
          ochirish,
          editFunc,
          plus,
          minus,
          sanoq,
          like,
          likeData,
        }}
      >
        {children}
      </DataContext.Provider>
  );
}
