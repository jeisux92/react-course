import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="person">
      <p onClick={props.click}>
        I'm a {props.name} and I'm {props.age}
      </p>
      {props.children}
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
