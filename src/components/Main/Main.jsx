import React from "react";
import "./Main.css";
//import SearchForm from "../SearchForm/SearchForm";//

function Main() {
  return (
    <main className="main">
      <section className="main__hero">
        <h2>Busca a tus artistas favoritos</h2>
        <p>Encuentra álbumes y canciones usando la API de Spotify.</p>
        <div
          style={{
            marginTop: "20px",
            border: "1px dashed #555",
            padding: "20px",
          }}
        >
          [Aquí irá el Formulario de Búsqueda]
        </div>
      </section>
    </main>
  );
}

export default Main;
