import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} id={input.id} {...input}></input>
    </div>
  );
});

export default Input;
