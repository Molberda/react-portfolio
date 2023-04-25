import {
  Contrast,
  GitHub,
  LinkedIn,
  Mail,
  PictureAsPdf,
  WhatsApp,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  function contrastOn(){
    console.log('contrast')
  }

  return (
    <div className="info__footer">
      <ul className="footer__list">
        <li className="footer__item whabtn--hover click">
          <IconButton className="icon__btn">
            <a
              href="https://wa.me/573163402080"
              target="_blank"
              className="icon__link"
            >
              <WhatsApp className="whabtn icon" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item mailbtn--hover click">
          <IconButton className="icon__btn">
            <a
              href="mailto:davidmollera@hotmail.com"
              target="_blank"
              className="icon__link"
            >
              <Mail className="mailbtn icon" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item gitbtn--hover click">
          <IconButton className="icon__btn ">
            <a
              href="https://github.com/Molberda"
              target="_blank"
              className="icon__link"
            >
              <GitHub className="gitbtn icon" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item linkedbtn--hover click">
          <IconButton className="icon__btn icon">
            <a
              href="https://www.linkedin.com/in/david-moller-2a9512255/"
              target="_blank"
              className="icon__link"
            >
              <LinkedIn className="linkedbtn icon" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item pdfbtn--hover click">
          <IconButton className="icon__btn">
            <a href="" className="icon__link">
              <PictureAsPdf className="pdfbtn icon" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item contrastbtn--hover click">
          <IconButton className="icon__btn" onClick={contrastOn}>
            <Contrast className="contrastbtn icon" />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
