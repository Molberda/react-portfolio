import React from "react";
import "./Modal.css";
import Modaltop from "../Items/Modaltop";
import Modalbottom from "../Items/Modalbottom";

const Modal = () => {
  return (
    <div className="modal__row">
      <div className="modal">
        <Modaltop/>
        <Modalbottom/>
      </div>
    </div>
  );
};

export default Modal;
