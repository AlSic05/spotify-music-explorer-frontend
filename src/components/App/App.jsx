import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/search-results"
          element={<div>Página de resultados (En construcción)</div>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
