import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
    console.log("[Cockpit.js] useEffect componentDidMounted");
    //Http request
    //componentDidMount
    //componentDidUpdate
    // const timer = setTimeout(() => {
    //   console.log("[Cockpit.js] timer");
    // }, 1000);

    return () => {
      //clearTimeout(timer);
      console.log("[Cockpit.js] component cleaned up");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect props changed");
    //Http request
    //componentDidMounted
  }, [props.showPersons]);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect props changed");
    return () => {
      console.log("[Cockpit.js] 2nd component cleaned up");
    };
  });

  let assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is a real application</p>

      <button onClick={props.toggle} className={btnClass} ref={toggleBtnRef}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
       {context=><button onClick={context.login}>Log in</button>} 
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
