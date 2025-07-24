import React from "react";
import "./Modal.css";
import { useLanguage } from "../contexts/LanguageContext";

function Modal({ isOpen, onClose, title, message, buttonText }) {
  const { t } = useLanguage();
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            {buttonText || t.close}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;