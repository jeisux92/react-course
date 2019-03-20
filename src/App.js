import React, { Component } from "react";
import Person from "./Person/Person";
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import "./App.css";

class App extends Component {
  changeNameHandler = (newName) => {
    this.setState((props, value) => ({
      person: {
        name: newName,
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
    },
    username: "Gabriel",
    showPerson: false
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">

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

      </div>
    );
  }
}

export default App;
