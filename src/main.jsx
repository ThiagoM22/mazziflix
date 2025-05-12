import { StrictMode } from "react";
import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Filmes from "./page/Filmes";
import Series from "./page/Series";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login.jsx";
import LoginPage from "./page/LoginPage.jsx";
import Resultado from "./page/Resultado.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Filmes" element={<Filmes />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Home" element={<App />} />
        <Route path="/Resultado" element={<Resultado />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
