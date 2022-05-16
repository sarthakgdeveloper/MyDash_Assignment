import React from "react";
import Styles from "./landingpageleftpanel.module.scss";

function LandingPageLeftPanel() {
  return (
    <div className={Styles.App_Data_container}>
      <div className={Styles.App_Data}>
        <h1>Create an account</h1>
        <div className={Styles.App_Data_login}>
          <div className={Styles.login_info_email}>
            <label htmlFor="Email_id">Your email address</label>
            <input type="text" id="Email_id" />
          </div>
          <div className={Styles.login_info_password}>
            <label htmlFor="password">Your password</label>
            <input type="password" id="password" />
          </div>
          <div className={Styles.login_info_cpassword}>
            <label htmlFor="cPassword">Confirm your password</label>
            <input type="password" id="cPassword" />
          </div>
          <div className={Styles.login_info_name}>
            <label htmlFor="Name">Your full name</label>
            <input type="text" id="Name" />
          </div>
          <div className={Styles.login_info_number}>
            <label htmlFor="Number">Your phone number</label>
            <input type="text" id="Number" />
          </div>
          <div className={Styles.login_info_terms}>
            <input type="checkbox" />
            <label htmlFor="checkbox">
              I read and agree Terms and Conditions
            </label>
          </div>
        </div>
        <button>Create account</button>
      </div>
    </div>
  );
}

export default LandingPageLeftPanel;
