import React from "react";
import ShareButton from './ShareButton'
import userImage from "../images/avatar-michelle.jpg";

const CardUser = () => {
  return (
    <div className="user-container">
      <div className="user-image-container">
        <img src={userImage} alt="userimage" className="user-image" />
      </div>

      <div className="user-data">
        <div className="user-name">Michelle Appleton</div>
        <div className="user-post-date">28 Jun 2020</div>
      </div>

      <ShareButton />
    </div>
  );
};

export default CardUser;
