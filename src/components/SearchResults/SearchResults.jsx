import React from "react";
import { useNavigate } from "react-router-dom";
import MusicCard from "../MusicCard/MusicCard";
import Preloader from "../Preloader/Preloader";

function SearchResults({ results, isLoading, isNotFound, hasError }) {
  const [visibleCount, setVisibleCount] = React.useState(3);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="search-results__status-container">
          <Preloader />
        </div>
      );
    }

    if (hasError) {
      return (
        <div className="search-results__status-container search-results__status-container--error">
          <p>
            Lo sentimos, algo ha salido mal durante la solicitud. Es posible que
            haya un problema de conexión o que el servidor no funcione. Por
            favor, inténtalo más tarde.
          </p>
        </div>
      );
    }

    if (isNotFound) {
      return (
        <div className="search-results__status-container search-results__status-container--empty">
          <h3>No se ha encontrado nada</h3>
          <p>Intenta buscar con otras palabras clave o revisa la ortografía.</p>
          <button
            className="search-results__back-button"
            onClick={() => navigate("/")}
          >
            Nueva búsqueda
          </button>
        </div>
      );
    }
    const visibleSongs = results.slice(0, visibleCount);

    return (
      <>
        <div className="search-results__grid">
          {visibleSongs.map((song) => (
            <MusicCard key={song.id} song={song} />
          ))}
        </div>

        {visibleCount < results.length && (
          <button
            type="button"
            onClick={handleShowMore}
            className="search-results__more-button"
          >
            Mostrar más
          </button>
        )}
      </>
    );
  };
  return (
    <section className="search-results">
      <h2 className="search-results__title">Resultados de la búsqueda</h2>
      {renderContent()}
    </section>
  );
}

export default SearchResults;
