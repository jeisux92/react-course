import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  changeNameHandler = () => {
    this.setState((props, value) => ({
      person: {
        name: "Maximilian",
        age: props.person.age + 24
      }
    }));
  };

  nameChangedHandler = event => {
    this.setState({
      person: {
        name: event.target.value,
        age: 23
      }
    });
  };

  state = {
    person: {
      name: "Gabriel",
      age: 26
    }
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.changeNameHandler.bind(this)} value="2">
          Switch Name
        </button>
        <Person
          change={this.nameChangedHandler.bind(this)}
          click={e => this.changeNameHandler()}
          name={this.state.person.name}
          age={this.state.person.age}
        />
      </div>
    );
  }
}

export default App;
