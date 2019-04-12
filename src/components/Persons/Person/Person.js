import React, { Component } from "react";
import classes from "./Person.css";
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';


import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    this.inputElementRef.current.focus();
  }
  
  render() {
    console.log('[Person.js] rendering...')
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age}
        </p>
        <input type="text" onChange={this.props.change} value={this.props.name} ref={this.inputElementRef}></input>
      </Aux>
    );
  }
};

Person.propTypes={
  click:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func
};

export default withClass(Person,classes.Person);
