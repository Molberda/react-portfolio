import React from "react";
import Personal from "../Items/Personal.jsx"
import Links from "../Items/Links.jsx"
import Footer from "../Items/Footer.jsx"

const Nav = () => {
  return (
    <div className="info__container">
      <Personal />
      <Links />
      <Footer />
    </div>
  );
};

export default Nav;
