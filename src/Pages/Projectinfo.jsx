import { Language } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import "./Projectinfo.css";

const Projectinfo = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === +id);

  return (
    <div id="projects__body">
      <div className="container projects__container">
        <div className="row projects__row">
          <div className="project__info--container">
            <h1>{project.title}</h1>
            <h3>{project.info}</h3>
            <a className="project__link" href={project.link}>
              <IconButton>
                <Language />
              </IconButton>
            </a>
          </div>
          <figure className="project__preview--wrapper">
            <div className="preview__background"></div>
            <img src={project.img} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Projectinfo;
