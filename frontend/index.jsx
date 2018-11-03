import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js";
import ChatRoom from "./ChatRoom.jsx";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<ChatRoom />, root);
});
