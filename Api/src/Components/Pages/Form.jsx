import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function Form() {
  let path = useNavigate();
  let path1 = useNavigate();
  let { setLoad, setData, malumotlar, dataInput, setDataInput } =
    useContext(Context);
  function sendFunc(e) {
    e.preventDefault();
    setLoad(true);
    if (!dataInput.id) {
      axios("https://ijarauz.pythonanywhere.com/product/region/", {
        method: "post",
        data: dataInput,
      })
        .then((res) => {
          if (res.status === 200 && res.statusText.toLowerCase() === "ok") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: res?.data?.message,
              showConfirmButton: false,
              timer: 1500,
            });
            setData([...malumotlar, res?.data?.data]);
            path("/tablepage");
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoad(false);
        });
    } else {
      axios(
        `https://ijarauz.pythonanywhere.com/product/region/${dataInput.slug}/`,
        {
          method: "put",
          data: dataInput,
        }
      )
        .then((res) => {
          console.log(res);
          let { data } = res.data;
          if (res.status === 200) {
            setData(
              malumotlar.map((item) => {
                return item.id === dataInput.id ? data : item;
              })
            );
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: res?.data?.message,
              showConfirmButton: false,
              timer: 1500,
            });
            path1("/tablepage");
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoad(false));
    }
  }
  return (
    <div className="Form">
      <form className="form" onSubmit={sendFunc}>
        <TextField
          label={"Country"}
          onChange={(e) => setDataInput({ ...dataInput, name: e.target.value })}
          value={dataInput.name}
        />
        <Button variant="contained" color="success" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
