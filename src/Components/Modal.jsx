import React from "react";
import "./Modal.css";
import Modalleft from "../Items/Modalleft";
import Modalright from "../Items/Modalright";

const Modal = () => {
  return (
    <div className="modal__row">
      <div className="modal">
        <Modalleft />
        <Modalright />
      </div>
    </div>
  );
};

export default Modal;
