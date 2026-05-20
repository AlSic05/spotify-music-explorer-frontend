import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link">
        Inicio
      </NavLink>

      <NavLink to="/search-results" className="navigation__link">
        Resultados
      </NavLink>

      <NavLink to="/about" className="navigation__link">
        Sobre el autor
      </NavLink>
    </nav>
  );
}

export default Navigation;
