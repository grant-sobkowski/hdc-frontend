import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Nav from "./Nav.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Nav></Nav>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
