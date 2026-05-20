import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import About from "../About/About";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import spotifyApi from "../../utils/SpotifyApi";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const [searchResults, setSearchResults] = React.useState(() => {
    const savedSearch = sessionStorage.getItem("lastSearch");
    return savedSearch ? JSON.parse(savedSearch) : [];
  });

  React.useEffect(() => {}, []);

  const handleSearchSubmit = (query) => {
    setIsLoading(true);
    setIsNotFound(false);
    setHasError(false);
    spotifyApi
      .search(query)
      .then((data) => {
        const tracks = data.tracks?.items || [];

        if (tracks.length === 0) {
          setIsNotFound(true);
          setSearchResults([]);
          sessionStorage.removeItem("lastSearch");
          navigate("/search-results");
        } else {
          setSearchResults(tracks);
          sessionStorage.setItem("lastSearch", JSON.stringify(tracks));
          navigate("/search-results");
        }
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
        setSearchResults([]);
        navigate("/search-results");
      })
      .finally(() => setIsLoading(false));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Header />

      <div className="app__content">
        <div className="app__section">
          <Routes>
            <Route path="/" element={<Main onOpenModal={handleOpenModal} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/search-results"
              element={
                sessionStorage.getItem("lastSearch") ||
                searchResults.length > 0 ? (
                  <SearchResults
                    results={searchResults}
                    isLoading={isLoading}
                    isNotFound={isNotFound}
                    hasError={hasError}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
          </Routes>
        </div>
      </div>

      <Footer />

      <ModalWithForm
        title="Búsqueda avanzada"
        name="search"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <SearchForm onSearch={handleSearchSubmit} />
      </ModalWithForm>
    </div>
  );
}

export default App;
