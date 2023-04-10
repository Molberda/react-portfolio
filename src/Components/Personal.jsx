import React from "react";

const Personal = () => {
  return (
    <div className="info__personal">
      <figure className="personal__pic--wrapper">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
          className="personal__pic"
        />
      </figure>
      <h1 className="personal__name">David Moller B</h1>
    </div>
  );
};

export default Personal;
