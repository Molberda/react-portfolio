import React from "react";
import "../Components/Modal.css";

const Modalleft = () => {
  function toggleModal() {
    document.querySelector("body").classList.toggle("modalON");
  }
  return (
    <div className="modalleft">
      <button onClick={toggleModal}>close</button>
    </div>
  );
};

export default Modalleft;
