import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Login";
import Home from "./Components/Views/Home";
// import Carrusel from "./Components/Pages/Carrusel";
// import logo from './logo.svg'; // Esta línea está comentada, así que no afecta a ESLint

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/website" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/carrusel" element={< Carrusel/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
