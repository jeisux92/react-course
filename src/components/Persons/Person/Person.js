import React, { Component } from "react";
import classes from "./Person.css";
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age}
        </p>
        <input type="text" onChange={this.props.change} value={this.props.name}></input>
      </Aux>
    );
  }
};

export default withClass(Person,classes.Person);
