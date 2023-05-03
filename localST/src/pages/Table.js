import { Button } from "@mui/material";
import React from "react";
export default function Table({ data }) {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>reginon name</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <th>{item.name}</th>
                  <td>
                    <Button variant="contained" color="secondary">
                      edit
                    </Button>
                  </td>
                  <td>
                    <Button variant="contained" color="error">
                      delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={"10"}>no data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
