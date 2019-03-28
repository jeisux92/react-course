import React, { Component } from "react";
import Person from "./Person/Person";
import Test from "./Test/Test";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.togglePersonhandler = this.togglePersonhandler.bind(this);
  }
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
  togglePersonhandler = e => {
    this.setState(prevState => ({
      showPerson: !prevState.showPerson
    }));
  };
  state = {
    person: {
      name: "Gabriel",
      age: 26
    },
    showPerson: true
  };
  render() {
    const styles = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    return (
      <div className="App">
        <Test />
        <button onClick={this.togglePersonhandler} value="2" style={styles}>
          Switch Name
        </button>
        {this.state.showPerson ? (
          <div>
            <span> {this.state.showPerson}</span>
            <Person
              change={this.nameChangedHandler}
              click={this.changeNameHandler}
              name={this.state.person.name}
              age={this.state.person.age}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
