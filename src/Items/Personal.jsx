import React from "react";
import Profile from '../Assets/foto__david.jpeg'

const Personal = () => {
  return (
    <div className="info__personal">
      <figure className="personal__pic--wrapper">
        <img
          src={Profile}
          alt=""
          className="personal__pic"
        />
      </figure>
      <h1 className="personal__name">David Moller B</h1>
    </div>
  );
};

export default Personal;
