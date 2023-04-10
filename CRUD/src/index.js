import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import DataContext from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataContext>
        <App />
      </DataContext>
    </Router>
  </React.StrictMode>
);
