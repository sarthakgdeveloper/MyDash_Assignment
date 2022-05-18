export const formValidator = (loginData, terms, setErrorMessage) => {
  let validPoints = 0;
  const isNumberinName = loginData.name.match(/\d+/g);
  const isTextinPhoneNumber = loginData.number.match(/^\d{10}$/);
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    loginData.email
  );
  if (!isEmailValid) {
    setErrorMessage((pState) => ({
      ...pState,
      email: {
        valid: false,
        message: "Please enter correct email address",
      },
    }));
    validPoints++;
  } else {
    setErrorMessage((pState) => ({
      ...pState,
      email: {
        valid: null,
        message: "",
      },
    }));
  }
  if (isNumberinName) {
    setErrorMessage((pState) => ({
      ...pState,
      name: {
        valid: false,
        message: "Please enter correct name",
      },
    }));
    validPoints++;
  } else {
    setErrorMessage((pState) => ({
      ...pState,
      name: {
        valid: null,
        message: "",
      },
    }));
  }
  if (loginData.password.length > 1 && loginData.password.length < 7) {
    setErrorMessage((pState) => ({
      ...pState,
      password: {
        valid: false,
        message: "Password length should be greater than 7",
      },
    }));
    validPoints++;
  } else {
    setErrorMessage((pState) => ({
      ...pState,
      password: {
        valid: null,
        message: "",
      },
    }));
  }
  if (
    loginData.cPassword.length > 0 &&
    loginData.password !== loginData.cPassword
  ) {
    setErrorMessage((pState) => ({
      ...pState,
      cPassword: {
        valid: false,
        message: "Please enter correct confirm password",
      },
    }));
    validPoints++;
  } else {
    setErrorMessage((pState) => ({
      ...pState,
      cPassword: {
        valid: null,
        message: "",
      },
    }));
  }
  if (
    !isTextinPhoneNumber ||
    (loginData.number.length < 10 && loginData.number.length > 0)
  ) {
    setErrorMessage((pState) => ({
      ...pState,
      number: {
        valid: false,
        message: "please enter correct phone number",
      },
    }));
    validPoints++;
  } else {
    setErrorMessage((pState) => ({
      ...pState,
      number: {
        valid: null,
        message: "",
      },
    }));
  }
  if (terms === false) {
    setErrorMessage((pState) => ({
      ...pState,
      terms: {
        valid: false,
        message: "Please confirm terms and conditions",
      },
    }));
    validPoints++;
  } else {
    setErrorMessage((pState) => ({
      ...pState,
      terms: {
        valid: null,
        message: "",
      },
    }));
  }
  if (validPoints > 0) {
    return false;
  }
  return true;
};
