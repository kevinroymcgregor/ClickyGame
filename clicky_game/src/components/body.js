import React from 'react';

class Body extends React.Component {
    
    render() {
      return (
        <div className="App">
          <Navbar score= {this.state.score} highScore= {this.state.highScore} />
          <Header />
        </div>
      );
    }
  }

export default Body;