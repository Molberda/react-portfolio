import React from "react";
import "../Components/Modal.css";

const Modalbottom = () => {
  return (
    <div className="modalbottom">
      <div className="modal__info">
        <h1 className="modal__title">
          Hello, I'm <span className="highlight">David Moller</span>
        </h1>
        <div className="modal__info--container">
          <p className="modal__text">
            And I'm a 22 year old{" "}
            <span className="highlight">frontend developer</span> with a strong
            desire to grow, improve and acquire knowledge. <br />
            <br />
            I'm currently working with Html, Css, JavaScript and React as a
            freelance developer, helping young entrepreneurs build their dream
            website{" "}
          </p>
          <div className="modal__languages--container">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbottom;
