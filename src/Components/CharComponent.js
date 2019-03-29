import React from "react";

function charComponent(props) {
  return <p onClick={props.delete}>{props.char}</p>;
}

export default charComponent;
