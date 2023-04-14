import React from "react";
import "../Components/Modal.css";

const Modalleft = () => {
  function toggleModal() {
    document.querySelector("body").classList.toggle("modalON");
  }
  return (
    <div className="modalleft">
      <div className="modal__info">
        <p className="modal__title">
          Hello, I'm <span className="highlight">David Moller</span> and I'm a
          22 year old <span className="highlight">frontend developer</span> with
          a strong desire to grow, improve and acquire knowledge. <br />
          I'm currently working with Html, Css, JavaScript and React as a
          freelance developer, helping young entrepreneurs build their dream
          website{" "}
        </p>
      </div>
    </div>
  );
};

export default Modalleft;
