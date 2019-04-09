import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = props => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect componentDidMounted')
    //Http request
    //componentDidMount
    //componentDidUpdate
    const timer = setTimeout(() => {
      console.log("[Cockpit.js] timer")
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("component cleaned up")
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] useEffect props changed')
    //Http request
    //componentDidMounted
  }, [props.showPersons])

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
