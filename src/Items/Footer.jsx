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
  return (
    <div className="info__footer">
      <ul className="footer__list">
        <li className="footer__item whabtn--hover click">
          <IconButton className="icon__btn">
            <a href="https://wa.me/573163402080" target="_blank" className="icon__link">
              <WhatsApp className="whabtn" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item mailbtn--hover click">
          <IconButton className="icon__btn">
            <a href="mailto:davidmollera@hotmail.com" target="_blank" className="icon__link">
              <Mail className="mailbtn" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item gitbtn--hover click">
          <IconButton className="icon__btn ">
            <a href="https://github.com/Molberda" target="_blank" className="icon__link">
              <GitHub className="gitbtn" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item linkedbtn--hover click">
          <IconButton className="icon__btn">
            <a href="" className="icon__link">
              <LinkedIn className="linkedbtn" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item pdfbtn--hover click">
          <IconButton className="icon__btn">
            <a href="" className="icon__link">
              <PictureAsPdf className="pdfbtn" />
            </a>
          </IconButton>
        </li>
        <li className="footer__item contrastbtn--hover click">
          <IconButton className="icon__btn">
            <a href="" className="icon__link">
              <Contrast className="contrastbtn" />
            </a>
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
