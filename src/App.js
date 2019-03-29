import React, { Component } from "react";
import Person from "./Person/Person";
<<<<<<< HEAD
import Test from "./Test/Test";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.togglePersonhandler = this.togglePersonhandler.bind(this);
  }
  changeNameHandler = id => {
    let persons = [...this.state.persons];
    persons.forEach(x => {
      if (x.id === id) {
        x.name = "Maximilian";
        x.age = 25;
=======
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import "./App.css";

class App extends Component {
  changeNameHandler = (newName) => {
    this.setState((props, value) => ({
      person: {
        name: newName,
        age: props.person.age + 24
>>>>>>> 1ea6f9900eab54a636a3282c837c8676d1fca41b
      }
    });
    this.setState({
      persons: persons
    });
  };

  nameChangedHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(x => x.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };
  togglePersonhandler = e => {
    this.setState(prevState => ({
      showPerson: !prevState.showPerson
    }));
  };
  state = {
<<<<<<< HEAD
    persons: [
      {
        id: 1,
        name: "Gabriel",
        age: 26
      },
      { id: 2, name: "Luisa", age: 26 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    showPerson: false,
    longText: 0,
    inputText: ""
  };
  deletePersonHandler = index => {
    let persons = this.state.persons;
    persons.splice(index, 1);

    this.setState({
      persons: persons
    });
  };
  changeInputHandler = event => {
    this.setState({
      longText: event.target.value.length,
      inputText: event.target.value
    });
  };
  delete = index => {
    let inputText = [...this.state.inputText];
    inputText.splice(index, 1);
    inputText = inputText.join("");
    this.setState({
      inputText: inputText
    });
=======
    person: {
      name: "Gabriel",
      age: 26
    },
    username: "Gabriel",
    showPerson: false
>>>>>>> 1ea6f9900eab54a636a3282c837c8676d1fca41b
  };

  changeUserNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonsHandler = () => {
    this.setState(prevState => ({
      showPerson: !prevState.showPerson
    }))
  }
  render() {
<<<<<<< HEAD
    const styles = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let persons;

    if (this.state.showPerson) {
      persons = (
        <div>
          <span> {this.state.showPerson}</span>
          {this.state.persons.map((person, index) => (
            <Person
              change={this.nameChangedHandler.bind(this, person.id)}
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              id={person.id}
              age={person.age}
              key={person.id}
            >
              <p>holi</p>
            </Person>
          ))}
        </div>
      );
      styles.backgroundColor = "red";
      styles[":hover"] = { backgroundColor: "salmon", color: "black" };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
=======
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
>>>>>>> 1ea6f9900eab54a636a3282c837c8676d1fca41b
    }

    return (
      <div className="App">
<<<<<<< HEAD
        <Test />
        <button onClick={this.togglePersonhandler} value="2" style={styles}>
          Switch Name
        </button>
        {persons}
        <br />
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.changeInputHandler}
        />
        <p className={classes.join(" ")}>{this.state.longText}</p>
        <ValidationComponent length={this.state.longText} />
        {this.state.inputText.split("").map((x, index) => (
          <CharComponent
            delete={this.delete.bind(this, index)}
            char={x}
            key={index}
          />
        ))}
=======

        <button style={style} onClick={this.togglePersonsHandler} value="2">
          Switch Name
        </button>
        {this.state.showPerson ?
          <Person
            change={this.nameChangedHandler.bind(this)}
            click={this.changeNameHandler.bind(this)}
            name={this.state.person.name}
            age={this.state.person.age}
          /> : ''
        }
        <UserInput
          name={this.state.username}
          change={this.changeUserNameHandler.bind(this)}>
        </UserInput>
        <UserOutput name={this.state.username}></UserOutput>

>>>>>>> 1ea6f9900eab54a636a3282c837c8676d1fca41b
      </div>
    );
  }
}

export default App;
