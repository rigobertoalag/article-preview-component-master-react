import React from "react";
import CardUser from "./CardUser";

const CardText = () => {
  return (
    <div className="card-text-container">
      <div className="card-text">
        <div className="card-title">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </div>
        <div className="card-text-body">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </div>
        <CardUser/>
      </div>
    </div>
  );
};

export default CardText;
