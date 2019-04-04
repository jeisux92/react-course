import React, { Component } from 'react'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import classes from './App.css'
class App extends Component {
  nameChangedHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(x => x.id === id)
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }
  state = {
    persons: [
      { id: 1, name: 'Gabriel', age: 26 },
      { id: 2, name: 'Luisa', age: 26 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    showPerson: false,
    longText: 0,
    inputText: ''
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
  render () {
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
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPerson}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </div>
    )
  }
}

export default App
