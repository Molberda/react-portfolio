import { Contrast, GitHub, LinkedIn, Mail, PictureAsPdf, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="info__footer">
      <ul className="footer__list">
        <li className="footer__item whabtn--hover click">
          <IconButton className="icon__btn">
            <WhatsApp className="whabtn"/>
          </IconButton>
        </li>
        <li className="footer__item mailbtn--hover click">
          <IconButton className="icon__btn">
            <Mail className="mailbtn"/>
          </IconButton>
        </li>
        <li className="footer__item gitbtn--hover click">
          <IconButton className="icon__btn ">
            <GitHub className="gitbtn"/>
          </IconButton>
        </li>
        <li className="footer__item linkedbtn--hover click">
          <IconButton className="icon__btn">
            <LinkedIn className="linkedbtn"/>
          </IconButton>
        </li>
        <li className="footer__item pdfbtn--hover click">
          <IconButton className="icon__btn">
            <PictureAsPdf className="pdfbtn"/>
          </IconButton>
        </li>
        <li className="footer__item contrastbtn--hover click">
          <IconButton className="icon__btn">
            <Contrast className="contrastbtn"/>
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
