import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { formValidator } from "./formvalidation";
import Styles from "./landingpageleftpanel.module.scss";

function LandingPageLeftPanel() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    cPassword: "",
    name: "",
    number: "",
  });

  const [terms, setTerms] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    email: {
      valid: null,
      message: "",
    },
    name: {
      valid: null,
      message: "",
    },
    password: {
      valid: null,
      message: "",
    },
    cPassword: {
      valid: null,
      message: "",
    },
    number: {
      valid: null,
      message: "",
    },
    terms: {
      valid: null,
      message: "",
    },
  });

  const handleChange = (e) => {
    if (!e) return;
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleTermsChange = () => {
    return setTerms(!terms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidator(loginData, terms, setErrorMessage);
    if (!isValid) return;
    return window.location.replace("/graph");
  };

  return (
    <div className={Styles.App_Data_container}>
      <div className={Styles.App_Data}>
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.App_Data_login}>
            <div className={Styles.login_info_email}>
              <FormInput
                hFor="Email_id"
                title="Your email address"
                type="email"
                name="email"
                value={loginData.email}
                handleChange={handleChange}
                errorMessage={errorMessage.email}
              />
            </div>
            <div className={Styles.login_info_password}>
              <FormInput
                hFor="password"
                title="Your password"
                type="password"
                name="password"
                value={loginData.password}
                handleChange={handleChange}
                errorMessage={errorMessage.password}
              />
            </div>
            <div className={Styles.login_info_cpassword}>
              <FormInput
                hFor="cPassword"
                title="Confirm your password"
                type="password"
                name="cPassword"
                value={loginData.cPassword}
                handleChange={handleChange}
                errorMessage={errorMessage.cPassword}
              />
            </div>
            <div className={Styles.login_info_name}>
              <FormInput
                hFor="Name"
                title="Your full name"
                type="text"
                name="name"
                value={loginData.name}
                handleChange={handleChange}
                errorMessage={errorMessage.name}
              />
            </div>
            <div className={Styles.login_info_number}>
              <FormInput
                hFor="Number"
                title="Your phone number"
                type="number"
                name="number"
                value={loginData.number}
                handleChange={handleChange}
                errorMessage={errorMessage.number}
              />
            </div>
            <div className={Styles.login_info_terms}>
              <input
                type="checkbox"
                id="checkbox"
                name="terms"
                checked={terms}
                onChange={handleTermsChange}
              />
              <label htmlFor="checkbox">
                I read and agree Terms and Conditions
              </label>
              <span
                style={
                  errorMessage.terms.valid === false ? {} : { display: "none" }
                }
              >
                {errorMessage.terms.message}
              </span>
            </div>
          </div>
          <button type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
}

export default LandingPageLeftPanel;
