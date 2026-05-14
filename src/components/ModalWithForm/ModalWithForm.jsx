import React from "react";

function ModalWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button className="modal__close" type="button" onClick={onClose} />
        <h2 className="modal__title">{title}</h2>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default ModalWithForm;
