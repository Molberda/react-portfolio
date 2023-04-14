import React from "react";
import Nav from "../Components/Nav";
import Showcase from "../Components/Showcase";
import "../App.css"
import Modal from "../Components/Modal";


const Landing = () => {
  return (
    <section id="Landing">
      <div className="container container__landing">
          <Modal/>
        <div className="row row__landing">
          <Nav />
          <Showcase />
        </div>
      </div>
    </section>
  );
};

export default Landing;
