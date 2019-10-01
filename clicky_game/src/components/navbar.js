import React from 'react';

class navbar extends React.Component {
    render() {
        const { score, highScore } = this.props;

        return (
            <nav className="navbar fixed-top navbar-dark bg-primary">
                <a className="navbar-brand" href="/#">Clicky Game</a>
                <div className="nav-item">
                    You have guessed correctly!
                </div>
                <div className="nav-item">
                    Score: {score} | High Score: {highScore}
                </div>
            </nav>
        )
    }
}

export default navbar;
