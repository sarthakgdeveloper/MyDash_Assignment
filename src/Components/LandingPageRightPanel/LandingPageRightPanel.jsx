import React from "react";
import Styles from "./landingpagerightpanel.module.scss";

function LandingPageRightPanel() {
  return (
    <div className={Styles.App_Image_container}>
      <div className={Styles.App_Image}>
        <img src="https://i.postimg.cc/wM6Kprrd/my-Dash-assignment.png" />
      </div>
      <div className={Styles.App_Image_text}>
        <h2>Choose a date range</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
    </div>
  );
}

export default LandingPageRightPanel;
