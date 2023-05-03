import React, { useContext } from "react";
import { Context } from "../Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Table() {
  let { malumotlar, setLoad, setData, setDataInput } = useContext(Context);
  let path = useNavigate();
  let handleEdit = (val) => {
    path("/formpage");
    setDataInput(val)
  };

  let handleDelete = (val) => {
    setLoad(true);
    axios(`https://ijarauz.pythonanywhere.com/product/region/${val.slug}/`, {
      method: "delete",
    })
      .then((res) => {
        if (res.status === 200) {
          setData(malumotlar.filter((item) => item.id !== val.id));
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoad(false));
  };

  return (
    <div className="Table">
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {malumotlar.length > 0 ? (
            malumotlar.map((val, i) => (
              <tr key={val.id}>
                <td>{i + 1}</td>
                <td>{val?.name}</td>
                <td>
                  <button onClick={() => handleEdit(val)}>edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(val)}>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={10}> no data... </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
