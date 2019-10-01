import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Header from './components/header'
import Body from './components/body'

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
        <Body />
      </div>
    );
  }
}

export default App;
