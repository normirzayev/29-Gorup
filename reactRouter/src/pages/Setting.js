import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/Context";
export default function Setting() {
  let { getValueInput, sendData } = useContext(DataContext);
  return (
    <div>
      <h1>setting</h1>

      <form className="form" onSubmit={sendData}>
        <input
          type="text"
          placeholder="name"
          onChange={getValueInput}
          name="name"
        />
        <br />
        <input
          type="text"
          placeholder="password"
          onInput={getValueInput}
          name="password"
        />
        <br />
        <button> send </button>
      </form>
    </div>
  );
}
