import React from "react";
import "../Components/Modal.css";

const Modalbottom = () => {
  return (
    <div className="modalbottom">
      <div className="modal__info">
        <h1 className="modal__title">
         Dont hesitate to <span className="highlight">Contact Me!</span>
        </h1>
        <div className="modal__info--container">
          <form action="" className="modal__form">
           <div className="form__item">
            <label htmlFor="name">Name</label>
            <input type="text" />
           </div>
           <div className="form__item">
            <label htmlFor="email">email</label>
            <input type="email" />
           </div>
           <div className="form__item">
            <label htmlFor="message">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modalbottom;
