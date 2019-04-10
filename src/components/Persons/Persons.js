import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Person.js] getDerivedStateFromProps')
  //   return state;
  // }
  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps', props)

  // } 
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate')
  //   return true
  //   if (nextProps.persons !== this.props.persons){
  //     return true
  //   }
  //   else{
  //     return false
  //   }

  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return { message: 'Snapshot' };
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount")
  }
  render() {
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person, index) => (
      <Person
        change={this.props.changed.bind(this, person.id)}
        click={this.props.clicked.bind(this, index)}
        name={person.name}
        id={person.id}
        age={person.age}
        key={person.id}
      />
    ))
  }
  } 
    export default Persons
