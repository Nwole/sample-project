import React, { Fragment } from "react";
import vue from "../../assets/vue-transparent.png";
import react from "../../assets/react-logo.png"
import reactNative from "../../assets/React_native.png"
import Beneift from "./Beneift";
const Services = () => {
  return (
    <Fragment>
      <div>
        <div className="our-service">
          <h2 style={{marginBottom: '20px'}}>Our Service</h2>
          <p className="para">
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="service-card">
          <div className="card">
            <img src={vue} alt="" width={"60px"} height={"60px"}style={{marginTop: '20', borderRadius: '10px'}} />
            <h2 className="develop-services">Vue js</h2>
            <p>
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum
            </p>
          </div>
          <div className="card">
            <img src={react} alt=""  width={"60px"} height={"60px"}style={{marginTop: '20', borderRadius: '10px'}} />
            <h2 className="develop-services">React Js</h2>
            <p>
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum
            </p>
          </div><div className="card">
            <img src={vue} alt="" width={"60px"} height={"60px"}style={{marginTop: '20', borderRadius: '10px'}} />
            <h2 className="develop-services">Vue js</h2>
            <p>
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum
            </p>
          </div><div className="card">
            <img src={reactNative} alt="" width={"60px"} height={"60px"}style={{marginTop: '20', borderRadius: '10px'}} />
            <h2 className="develop-services">React Native</h2>
            <p>
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum
            </p>
          </div>
        </div>
        <Beneift />
      </div>
    </Fragment>
  );
};

export default Services;
