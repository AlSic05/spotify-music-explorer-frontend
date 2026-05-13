import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Spotify App</h1>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Inicio
        </Link>
        <Link to="/search-results" className="header__link">
          Resultados
        </Link>
      </nav>
    </header>
  );
}

export default Header;
