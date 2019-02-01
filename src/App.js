import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name={"Gabriel"} age={23}>
          <div>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
            </ul>
          </div>
        </Person>
      </div>
    );
  }
}

export default App;
