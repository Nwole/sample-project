import React, { Fragment } from "react";
import "./companies.css";
import airbnb from "../../assets/airbnb-mobile.jpg";
import hubspot from "../../assets/hubspot.png";
import microsoft from "../../assets/microsoft.webp";
import spotify from "../../assets/Spotify.png";
import white from "../../assets/google.png";
import intel from "../../assets/intel.png";
import Services from "./Services";
const companies = () => {
  return (
    <Fragment>
      <div className="company">
        <p className="company-para">Trusted by 5000 + companies Worldwide</p>
        <div className="images">
          <img src={airbnb} width={"100px"} height={"100px"} alt="gee" />
          <img src={hubspot} width={"100px"} height={"50px"} alt="gee"/>
          <img src={microsoft} width={"100px"} height={"100px"} alt="gee"/>
          <img src={spotify} width={"100px"} height={"50px"} alt="gee"/>
          <img src={white} width={"100px"} height={"100px"} alt="gee"/>
          <img src={intel} width={"100px"} height={"100px"} alt="gee"/>
        </div>
        <Services />
      </div>
    </Fragment>
  );
};

export default companies;
