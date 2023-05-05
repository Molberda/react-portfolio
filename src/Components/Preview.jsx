import { IconButton } from "@mui/material";
import React from "react";

const Preview = ({ project }) => {
  return (
    <div className="preview__background">
      <div className="background__info--container">
        <h2>{project.title}</h2>
        <a href={project.link}>Take a Look!</a>
      </div>
    </div>
  );
};

export default Preview;
