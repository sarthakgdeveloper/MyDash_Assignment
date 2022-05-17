import React from "react";

function FormInput({
  title,
  hFor,
  type,
  name,
  value,
  handleChange,
  errorMessage,
}) {
  return (
    <>
      <label htmlFor={hFor}>{title}</label>
      <input
        type={type}
        id={hFor}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
      <span style={errorMessage.valid === false ? {} : { display: "none" }}>
        {errorMessage.message}
      </span>
    </>
  );
}

export default FormInput;
