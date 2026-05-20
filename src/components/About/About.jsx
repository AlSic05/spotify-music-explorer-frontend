import React from "react";

function About() {
  return (
    <section className="about">
      <div className="about__image"></div>

      <div className="about__content">
        <h2 className="about__title">Acerca del autor</h2>
        <p className="about__description">
          Hola, soy un desarrollador en formación apasionado por crear
          soluciones web que conecten a las personas con sus intereses, como la
          música a través de la API de Spotify.
        </p>
        <p className="about__description">
          En este proyecto, apliqué conocimientos de React, Vite y metodologías
          como BEM para construir una interfaz responsiva y eficiente.
        </p>
      </div>
    </section>
  );
}

export default About;
