import React from "react";
import classes from "./Person.css";

const person = props => {

  return (
    <div className={classes.person}>
      <p onClick={props.click}>
        I'm a {props.name} and I'm {props.age}
      </p>
      <input type="text" onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
