import React, { Component } from "react";
import Person from "./Person/Person";
import Test from "./Test/Test";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";
import classes from "./App.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
  };

  changeUserNameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  togglePersonsHandler = () => {
    this.setState(prevState => ({
      showPerson: !prevState.showPerson
    }));
  };
  render() {
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
            <ErrorBoundary key={person.id}>
              <Person
                change={this.nameChangedHandler.bind(this, person.id)}
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                id={person.id}
                age={person.age}
              >
                <p>holi</p>
              </Person>
            </ErrorBoundary>
          ))}
        </div>
      );
      styles.backgroundColor = "red";
      styles[":hover"] = { backgroundColor: "salmon", color: "black" };
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
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
        <p className={assignedClasses.join(" ")}>{this.state.longText}</p>
        <ValidationComponent length={this.state.longText} />
        {this.state.inputText.split("").map((x, index) => (
          <CharComponent
            delete={this.delete.bind(this, index)}
            char={x}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
