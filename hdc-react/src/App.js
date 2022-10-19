import "./styles/app.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";

// TODO: General Structure for each page
// TODO: Router

function App() {
  // if state == home -> return home
  // example of data format for plotly
  return (
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
