import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Projectinfo.css";
import Preview from "../Components/Preview";

const Projectinfo = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === +id);

  return (
    <div id="projects__body">
      <div className="container projects__container">
        <div className="row projects__row">
          <Link>
            <IconButton>
              <Close className="close__btn" />
            </IconButton>
          </Link>
          <div className="project__info--container">
            <h1>{project.title}</h1>
            <h3>{project.info}</h3>
          </div>
          <figure className="project__preview--wrapper">
            <Preview project={project} />
            <img src={project.img} alt="" className="preview__img" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Projectinfo;
