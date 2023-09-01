import React from "react";
import "./Ecat.css";
export const Ecat = (props) => {
    const { Eimage } = props.data;
  return (
    <div className="Ecat">
      <div className="EcatImage">
        <img src={Eimage} />
      </div>
      <button>Add to cart</button>
      {/* <p className="EcatName">
        <b>{EcatName}</b>
      </p> */}
    </div>
  );
};
