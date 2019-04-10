import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary"
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <React.Fragment>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age}
        </p>
        <input type="text" onChange={this.props.change} value={this.props.name}></input>
      </React.Fragment>
    );
  }
};

export default Person;
