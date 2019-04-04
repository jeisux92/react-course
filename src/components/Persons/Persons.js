import React from 'react'
import Person from './Person/Person'
const persons = props =>
  props.persons.map((person, index) => (
    <Person
      change={props.changed.bind(this, person.id)}
      click={props.clicked.bind(this, index)}
      name={person.name}
      id={person.id}
      age={person.age}
      key={person.id}
    />
  ))

export default persons
