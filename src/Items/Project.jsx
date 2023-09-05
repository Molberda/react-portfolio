import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = ({ item }) => {
  const [img, setimg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = item.img;
    image.onload = () => {
      setTimeout(() => {
        setimg(image);
      }, 800);
    };
  });

  return (
    <div className="project__container click">
      {img ? (
        <>
          <Link to={`/project/${item.id}`}>
            <figure className="project__wrapper">
              <img src={img.src} alt="" className="project__img" />
              <span className="project__background">
                <h1 className="project__title">{item.title}</h1>
              </span>
            </figure>
          </Link>
        </>
      ) : (
        <>
          {" "}
          <div className="custom-loader"></div>{" "}
        </>
      )}
    </div>
  );
};

export default Project;
