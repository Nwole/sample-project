import React, { Fragment } from "react";
import "./benefit.css";
import bandlab from "../../assets/bandlab.jpg";
const Beneift = () => {
  return (
    <Fragment>
      <div className="benefit">
        <img src={bandlab} alt="" width={"50%"} height={"50%"} />
        <div className="benefit-list">
          <h2 style={{marginBottom: '20px'}}>Your Beneift</h2>
          <p className="benefit-para">
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
          </p>
          <div className="benefit-facilities">
            <h3 style={{marginBottom: '20px'}}>There All Kinds Of Facilitites</h3>
            <p className="benefit-para">
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Beneift;
