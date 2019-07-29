import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Frankinstein', id: 1 },
        { name: 'Gorrilla', id: 2 },
        { name: 'Zombie', id: 3 }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
        }
      </div>
    )
  }
}
export default App;
