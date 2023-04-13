import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="info__footer">
      <ul className="footer__list">
        <li className="footer__item">
          <IconButton>
            <WhatsApp/>
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
