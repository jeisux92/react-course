import React from 'react'
import classes from './Cockpit.css'

const cockpit = props => {
  let assignedClasses = []
  let btnClass = ''
  if (props.showPersons) {
    btnClass = classes.red
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }
  return (
    <div className={classes.cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is a real application</p>

      <button onClick={props.toggle} className={btnClass}>
        Toggle Persons
      </button>
    </div>
  )
}

export default cockpit
