import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
        <Route path="/search-results" element={<div>Resultados</div>} />
      </Routes>
      <Footer />

      <ModalWithForm
        title="Búsqueda avanzada"
        name="search"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <SearchForm />
      </ModalWithForm>
    </div>
  );
}

export default App;
