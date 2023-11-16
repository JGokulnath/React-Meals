import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || "button"}
      onSubmit={props.onSubmit}
      disabled={props.disabled}
    >
      {props.children}{" "}
    </button>
  );
};

export default Button;
