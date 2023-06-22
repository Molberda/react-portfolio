import LinkIcon from '@mui/icons-material/Link';
import { Button } from "@mui/material";
import React from "react";

const Preview = ({ project }) => {
  return (
    <div className="preview__background">
      <div className="background__info--container">
        <h2 className="preview__title">{project.title}</h2>
        <Button variant='outlined' href={project.link} target='_blank' rel='noreferrer' endIcon={<LinkIcon className="link__icon" />} className="preview__btn">
          <h3 className="preview__link">Take a Look!</h3>
        </Button>
      </div>
    </div>
  );
};

export default Preview;
