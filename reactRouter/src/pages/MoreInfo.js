import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function MoreInfo() {
  let { data, handleDel, handleEdit, handlePlus, handleMinus } =
    useContext(DataContext);

  return (
    <div className="moreInfo">
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>nomi</th>
            <th>haqida</th>
            <th colSpan={3}>action</th>
            <th colSpan={2}>edit delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.nomi}</td>
                  <td>{item?.haqida}</td>
                  <td>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handlePlus(item)}
                    >
                      &plusmn;
                    </Button>
                  </td>
                  <td>{item?.soni}</td>
                  <td>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleMinus(item)}
                    >
                      &minus;
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleEdit(item)}
                    >
                      edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDel(item.id)}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={10}> No data... </td>
            </tr>
          )}
        </tbody>
      </table>

      <Link to="/setting"> lastPage </Link>
    </div>
  );
}
