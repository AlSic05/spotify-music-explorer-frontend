import React from "react";
import About from "../About/About";

function Main({ onOpenModal }) {
  return (
    <main className="main">
      <div className="main__hero">
        <h2>Busca a tus artistas favoritos</h2>
        <p>
          Encuentra información de álbumes y canciones usando la API de Spotify.
        </p>
      </div>
      <button className="main__search-button" onClick={onOpenModal}>
        Comenzar búsqueda
      </button>
    </main>
  );
}

export default Main;
