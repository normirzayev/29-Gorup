import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Setting() {
  let { getValueInput, clearInput, sendLocalData, inputData } =
    useContext(DataContext);

  let portal = useNavigate();
  let cencelFunc = () => {
    clearInput();
    portal("/moreInfo");
  };
  return (
    <div>
      <h1>setting</h1>
      <form className="form">
        <input
          type="text"
          placeholder="nomi"
          onChange={getValueInput}
          name="nomi"
          value={inputData?.nomi}
        />
        <br />
        <input
          type="text"
          placeholder="haqida"
          onInput={getValueInput}
          name="haqida"
          value={inputData?.haqida}
        />
        <br />
        <Button variant="contained" onClick={sendLocalData}>
          {inputData.id === "" ? "send" : "edit"}
        </Button>
        <Button variant="outlined" onClick={cencelFunc}>
          cencel
        </Button>
      </form>
    </div>
  );
}
