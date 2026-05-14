import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
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

  const handleSearchSubmit = (query) => {
    setIsLoading(true);
    spotifyApi
      .search(query)
      .then((data) => {
        setSearchResults(data.tracks.items);
        setIsModalOpen(false);
        navigate("/search-results");
      })
      .catch((err) => console.error(err))
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
        <Route
          path="/search-results"
          element={<SearchResults results={searchResults} />}
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
