import React from "react";

function ModalWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
  buttonText = "Guardar",
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button className="modal__close" type="button" onClick={onClose} />

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" name={name}>
          {children}

          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
