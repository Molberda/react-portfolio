import { Button } from "@mui/material";
import React from "react";

const Preview = ({ project }) => {
  return (
    <div className="preview__background">
      <div className="background__info--container">
        <h2>{project.title}</h2>
        <Button>
          <a href={project.link}>Take a Look!</a>
        </Button>
      </div>
    </div>
  );
};

export default Preview;
