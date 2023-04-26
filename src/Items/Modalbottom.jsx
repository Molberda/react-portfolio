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
            <input type="text" placeholder="John Doe" />
           </div>
           <div className="form__item">
            <label htmlFor="email">email</label>
            <input type="email" placeholder="johndoe@gmail.com"/>
           </div>
           <div className="form__item">
            <label htmlFor="message">Message</label>
            <textarea placeholder="I really like your work, lets have a chat!"></textarea>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modalbottom;