import MusicCard from "../MusicCard/MusicCard";

function SearchResults({ results }) {
  return (
    <section className="search-results">
      <h2 className="search-results__title">Resultados de la búsqueda</h2>
      <div className="search-results__grid">
        {results.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}

export default SearchResults;
