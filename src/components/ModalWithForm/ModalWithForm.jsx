import React from "react";

function ModalWithForm({ title, name, children, isOpen, onClose }) {
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <button className="modal__close" type="button" onClick={onClose} />
        <h2 className="modal__title">{title}</h2>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default ModalWithForm;
