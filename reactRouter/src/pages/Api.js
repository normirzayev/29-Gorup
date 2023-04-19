import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loading from "../component/Loading";
import axios from "axios";
export default function Api() {
  let [data, setData] = useState([]);
  let [load, setLoad] = useState(false);
  let [search, setSearch] = useState("");
  useEffect(() => {
    setLoad(true);
    // fetch("https://jsonplaceholder.typicode.com/users", {
    //   method: "get",
    // })
    //   .then((jsonData) => jsonData.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     console.log("malumot olish tugadi");
    //     setLoad(false);
    //   });

    axios("/users", {
      method: "get",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoad(false));
  }, []);

  return (
    <>
      <Loading load={load} />
      <br />
      <input
        type="search"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <div className="shopping">
        {data.length > 0 ? (
          data
            .filter((elem) => {
              if (
                elem?.name
                  ?.trim()
                  .toLowerCase()
                  .includes(search?.trim().toLowerCase())
              ) {
                return elem;
              }
            })
            .map((item, index) => (
              <Card sx={{ width: 345 }} key={index}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item?.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item?.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item?.address?.street}
                  </Typography>
                </CardContent>
              </Card>
            ))
        ) : (
          <h1> No Data...</h1>
        )}
      </div>
    </>
  );
}
