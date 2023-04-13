import React from "react";
import Nav from "../Components/Nav";
import Showcase from "../Components/Showcase";
import "../App.css"
import Modalleft from "../Components/Modalleft";


const Landing = () => {
  return (
    <section id="Landing">
      <div className="container container__landing">
        <div className="row row__landing">
          <Modalleft/>
          <Nav />
          <Showcase />
        </div>
      </div>
    </section>
  );
};

export default Landing;
