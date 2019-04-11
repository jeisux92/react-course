import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <div className={classes.person} >
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age}
        </p>
        <input type="text" onChange={this.props.change} value={this.props.name}></input>
      </div>
    );
  }
};

export default Person;
