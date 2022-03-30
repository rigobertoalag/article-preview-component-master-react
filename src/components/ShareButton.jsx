import React, { useState } from "react";

import shareIcon from "../images/icon-share.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";

const ShareButton = () => {
  const [active, setActive] = useState(false);

  const ShowShare = () => {
    if (active) {
      return (
        <div>
          <i className="arrow down"></i>
          <div className="shbtn-modal-container">
            <p>S H A R E</p>
            <span>
              <img src={iconFacebook} alt="facebook" />
            </span>
            <span>
              <img src={iconTwitter} alt="twitter" />
            </span>
            <span>
              <img src={iconPinterest} alt="pinterest" />
            </span>
          </div>
          
        </div>
      );
    }
    return null;
  };

  return (
    <div className="shrbtn-main">
      <ShowShare />

      <div
        className="shrbtn-container"
        onClick={() => (active === false ? setActive(true) : setActive(false))}
      >
        <img src={shareIcon} alt="shareicon" className="shareicon" />
      </div>
    </div>
  );
};

export default ShareButton;
