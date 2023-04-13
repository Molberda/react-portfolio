import { GitHub, LinkedIn, Mail, PictureAsPdf, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="info__footer">
      <ul className="footer__list">
        <li className="footer__item">
          <IconButton className="icon__btn">
            <WhatsApp/>
          </IconButton>
        </li>
        <li className="footer__item">
          <IconButton className="icon__btn">
            <Mail/>
          </IconButton>
        </li>
        <li className="footer__item">
          <IconButton className="icon__btn">
            <GitHub/>
          </IconButton>
        </li>
        <li className="footer__item">
          <IconButton className="icon__btn">
            <LinkedIn/>
          </IconButton>
        </li>
        <li className="footer__item">
          <IconButton className="icon__btn">
            <PictureAsPdf/>
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
