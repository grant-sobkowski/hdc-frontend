import './styles/app.css';
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';

// TODO: General Structure for each page
// TODO: Router


function App() {
  // if state == home -> return home
  return (
    <Routes>
      <Route path="/search" element={<Search />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
