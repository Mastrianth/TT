import React from "react";

import "./Button.scss";

const Button = (props) => {
  const { text, type, handleClick, submit, disabled, className } = props;

  const buttonClassTypes = {
    primary: "btn-primary",
    flat: "btn-flat",
  };

  const buttonCLass = `btn ${buttonClassTypes[type]} ${className}`;
  const buttonType = submit ? "submit" : "";

  return (
    <button
      className={buttonCLass}
      onClick={handleClick}
      disabled={disabled}
      type={buttonType}
    >
      {text}
    </button>
  );
};

export default Button;
