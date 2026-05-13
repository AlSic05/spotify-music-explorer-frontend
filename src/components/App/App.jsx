import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <main className="app__section">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/search-results"
              element={<div>Página de resultados (En construcción)</div>}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
