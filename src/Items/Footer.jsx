import { GitHub, LinkedIn, Mail, PictureAsPdf, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="info__footer">
      <ul className="footer__list">
        <li className="footer__item">
          <IconButton className="icon__btn">
            <WhatsApp color="success"/>
          </IconButton>
        </li>
        <li className="footer__item">
          <IconButton className="icon__btn">
            <Mail className="mailbtn"/>
          </IconButton>
        </li>
        <li className="footer__item gitbtn--hover click">
          <IconButton className="icon__btn ">
            <GitHub className="gitbtn"/>
          </IconButton>
        </li>
        <li className="footer__item">
          <IconButton className="icon__btn">
            <LinkedIn className="linkedbtn"/>
          </IconButton>
        </li>
        <li className="footer__item">
          <IconButton className="icon__btn">
            <PictureAsPdf className="pdfbtn"/>
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
