import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm a {props.name} and I'm {props.age}
      </p>
      <input type="text" onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
