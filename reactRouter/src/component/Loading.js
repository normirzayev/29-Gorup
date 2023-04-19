import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading({ load }) {
  return (
    <Box className={load ? "loading" : "loading_disabled"}>
      <CircularProgress style={{ fontSize: "100px" }} />
    </Box>
  );
}
