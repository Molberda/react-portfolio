import { Button } from "@mui/material";
import React from "react";

const Preview = ({ project }) => {
  return (
    <div className="preview__background">
      <div className="background__info--container">
        <h2 className="preview__title">{project.title}</h2>
        <Button variant='outlined' className="preview__btn">
          <a href={project.link} className="preview__link">Take a Look!</a>
        </Button>
      </div>
    </div>
  );
};

export default Preview;
