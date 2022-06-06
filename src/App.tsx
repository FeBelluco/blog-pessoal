import React from "react";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {" "}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
