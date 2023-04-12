import React from "react";
import Project from "../Items/Project";
import { projects } from "../Data";

const Showcase = () => {
  return (
    <div className="projects__group">
      {projects.map((item) => (<Project key={item.id} item={item}/>))}
    </div>
  );
};

export default Showcase;
