import React from "react";

const Language = ({ name, img }) => {
  return (
    <figure className="language__wrapper">
      <img
        src={img}
        alt=""
        className="language__img"
      />
      <p className="language__name">{name}</p>
    </figure>
  );
};

export default Language;
