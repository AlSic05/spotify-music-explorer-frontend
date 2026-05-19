import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
  const [searchResults, setSearchResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const savedSearch = localStorage.getItem("lastSearch");
    if (savedSearch) {
      setSearchResults(JSON.parse(savedSearch));
    }
  }, []);

  const handleSearchSubmit = (query) => {
    setIsLoading(true);
    setIsNotFound(false);
    setHasError(false);

    navigate("/search-results");

    spotifyApi
      .search(query)
      .then((data) => {
        const tracks = data.tracks?.items || [];

        if (tracks.length === 0) {
          setIsNotFound(true);
          setSearchResults([]);
          localStorage.removeItem("lastSearch");
        } else {
          setSearchResults(tracks);
          localStorage.setItem("lastSearch", JSON.stringify(tracks));
        }
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
        setSearchResults([]);
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

      <Routes>
        <Route path="/" element={<Main onOpenModal={handleOpenModal} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search-results"
          element={
            <SearchResults
              results={searchResults}
              isLoading={isLoading}
              isNotFound={isNotFound}
              hasError={hasError}
            />
          }
        />
      </Routes>

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
