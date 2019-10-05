import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Header from './components/header'
import Picture from './components/picture';

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0
  }

  addScore = () => {
		this.setState({
			score: (this.state.score + 1)
		});
	}

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Header />
        <Picture image="x-wing" onClick={this.addScore} />
        <Picture image="tie-fighter" onClick={this.addScore} />
        <Picture image="millenium-falcon" onClick={this.addScore} />
        <Picture image="death-star-2" onClick={this.addScore} />
        <Picture image="a-wing" onClick={this.addScore} />
        <Picture image="hyena-bomber" onClick={this.addScore} />
        <Picture image="land-speeder" onClick={this.addScore} />
        <Picture image="slave-one" onClick={this.addScore} />
        <Picture image="star-destroyer" onClick={this.addScore} />
        <Picture image="tie-advanced" onClick={this.addScore} />
        <Picture image="tie-defender" onClick={this.addScore} />
        <Picture image="tie-interceptor" onClick={this.addScore} />
      </div>
    );
  }
}

export default App;
