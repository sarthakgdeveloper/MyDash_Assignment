import React from "react";
import LandingPageRightPanel from "../LandingPageRightPanel/LandingPageRightPanel";
import LandingPageLeftPanel from "../LandingPageLeftPanel/LandingPageLeftPanel";

import Styles from "./landingpage.module.scss";

function LandingPage() {
  return (
    <div className={Styles.App_section}>
      <div className={Styles.App_container}>
        <LandingPageRightPanel />
        <LandingPageLeftPanel />
      </div>
    </div>
  );
}

export default LandingPage;
