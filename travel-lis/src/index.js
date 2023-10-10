import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root")); // REACTDOM to create root
// rendering component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
