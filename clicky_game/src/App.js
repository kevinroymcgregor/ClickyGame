import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Header from './components/header'

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0
  }
  
  render() {
    return (
      <div className="App">
        <Navbar score= {this.state.score} highScore= {this.state.highScore} />
        <Header />
      </div>
    );
  }
}

export default App;
