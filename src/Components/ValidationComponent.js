import React from "react";

function validationComponent(props) {
  if (props.length < 5) {
    return <p>Text too short</p>;
  } else {
    return <p>It's ok</p>;
  }
}

export default validationComponent;
