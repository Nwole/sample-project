import React, { Fragment } from "react";
import "./header.css";
import person from "../../assets/white-back.jpg";
const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div style={{ width: "50%" }}>
          <div className="digital-wrapper">
          <h1 className="header-digital">Digital</h1>
          <h1 className="header-agency">Agency</h1>
          </div>
          <p>
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="start-btn">Get Started</button>
        </div>
        <img src={person} width={"100%"} height={"80%"} />
      </div>
    </Fragment>
  );
};

export default Header;
