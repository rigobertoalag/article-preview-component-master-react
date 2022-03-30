import React, { useState } from "react";

import shareIcon from "../images/icon-share.svg";

const ShareButton = () => {
  const [active, setActive] = useState(true);

  const Test = () => {
    if (active) {
      return (
        <div className="shbtn-modal-container">
          <p>S H A R E</p>
          <p>F</p>
          <p>T</p>
          <p>P</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="shrbtn-main">
      <Test />

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
