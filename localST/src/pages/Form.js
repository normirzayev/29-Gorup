import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({ value, setValue, setData, data }) {
  let navi = useNavigate();

  let getValueFunc = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  let handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSend}>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          onChange={getValueFunc}
          value={value.userName}
        />
        <button type="submit"> {value.id === "" ? "send" : "edit"} </button>
      </form>
    </div>
  );
}
