import React from "react";
import { Link } from "react-router-dom";

const Project = ({ item }) => {
  return (
    <div className="project__container click">
      <Link to={`/project/${item.id}`}>
        <figure className="project__wrapper">
          <img
            src={item.img}
            alt=""
            className="project__img"
          />
          <span className="project__background">
            <h1 className="project__title">{item.title}</h1>
          </span>
        </figure>
      </Link>
    </div>
  );
};

export default Project;
