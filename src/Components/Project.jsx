import React from "react";

const Project = () => {
  return (
    <div className="project__container">
      <figure className="project__wrapper">
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          alt=""
          className="project__img"
        />
        <span className="project__background">
            <h1 className="project__title">title</h1>
        </span>
      </figure>
    </div>
  );
};

export default Project;
