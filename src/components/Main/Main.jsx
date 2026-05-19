import React from "react";
import About from "../About/About";

function Main({ onOpenModal }) {
  return (
    <main className="main">
      <section className="main__hero">
        <h2>Busca a tus artistas favoritos</h2>
        <p>
          Encuentra información de álbumes y canciones usando la API de Spotify.
        </p>
        <button
          type="button"
          onClick={onOpenModal}
          className="main__search-button"
        >
          Comenzar búsqueda
        </button>
      </section>
    </main>
  );
}

export default Main;
