import "./styles/app.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import TestPlot from "./pages/Test-Plot.js";

// TODO: General Structure for each page
// TODO: Router

function App() {
  // if state == home -> return home
  // example of data format for plotly
  var data = [
    {
      x: [0, 1, 2, 3, 4, 5, 6],
      y: [60, 120, 60, 40, 50, 20, 10],
    },
  ];
  return (
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestPlot data={data} title="death" />} />
    </Routes>
  );
}

export default App;
