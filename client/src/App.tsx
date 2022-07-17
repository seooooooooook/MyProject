import React from "react";
import Home from "./pages/Home";
import "./assets/total.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
