import React from 'react';
import './App.css';
import Navbar from './components/navbar'

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0
  }
  
  render() {
    return (
      <div className="App">
        <Navbar score= {this.state.score} highScore= {this.state.highScore}/>
      </div>
    );
  }
}

export default App;
