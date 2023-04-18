import React from "react";
import "../Components/Modal.css";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const Modaltop = () => {
  function toggleModal() {
    document.querySelector("body").classList.toggle("modalON");
  }
  return (
    <div className="modaltop">
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
            <ul className="languages__list">
              <li className="language__item">
                <figure className="language__wrapper">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    alt=""
                    className="language__img"
                  />
                  <p className="language__name">css</p>
                </figure>
              </li>
              <li className="language__item">
                <figure className="language__wrapper">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    alt=""
                    className="language__img"
                  />
                  <p className="language__name">css</p>
                </figure>
              </li>
              <li className="language__item">
                <figure className="language__wrapper">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    alt=""
                    className="language__img"
                  />
                  <p className="language__name">css</p>
                </figure>
              </li>
              <li className="language__item">
                <figure className="language__wrapper">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    alt=""
                    className="language__img"
                  />
                  <p className="language__name">css</p>
                </figure>
              </li>
            </ul>
          </div>
        </div>
        <div className="closebtn">
          <IconButton onClick={toggleModal}>
            <Close className="close__icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Modaltop;
