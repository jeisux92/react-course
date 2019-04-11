import React, { Component } from 'react'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import classes from './App.css'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 1, name: 'Gabriel', age: 26 },
        { id: 2, name: 'Luisa', age: 26 },
        { id: 3, name: 'Gloria', age: 48 }
      ],
      showPerson: false,
      showCockpit: true,
      changeCounter:0

    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props, state)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] was mounted')
    //setInterval(() => this.setState((prevState) => ({ time: prevState.time + 1 })), 1000)
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }
  nameChangedHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(x => x.id === id)
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState((prevState)=>({
      persons: persons,
      changeCounter:prevState.changeCounter+1
    }))
  }

  deletePersonHandler = index => {
    let persons = this.state.persons
    persons.splice(index, 1)

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    this.setState(prevState => ({
      showPerson: !prevState.showPerson
    }))
  }

  toggleCockpit = () => {
    this.setState((prevState) => ({
      showCockpit: !prevState.showCockpit
    }))
  }
  render() {

    console.log('[App.js] render method', Date.now())
    let persons

    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.nameChangedHandler}
          clicked={this.deletePersonHandler}
        />
      )
    }

    return (
      <Aux>
        {this.state.changeCounter}
        <p>{this.state.time}</p>
        <button onClick={this.toggleCockpit}>Remove cockpit</button>
        {this.state.showCockpit ? <Cockpit
          personsLength={this.state.persons.length}
          showPersons={this.state.showPerson}
          toggle={this.togglePersonsHandler}
        /> : null}
        {persons}
      </Aux>
    )
  }
}

export default withClass(App, classes.App);
