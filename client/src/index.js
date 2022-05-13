import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("Closedrs.space"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
