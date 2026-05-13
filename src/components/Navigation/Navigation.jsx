import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link navigation__link--outline">
        Inicio
      </Link>
      <Link
        to="/search-results"
        className="navigation__link navigation__link--solid"
      >
        Resultados
      </Link>
    </nav>
  );
}

export default Navigation;
