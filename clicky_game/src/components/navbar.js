import React from 'react';

class navbar extends React.Component {
    render() {
        const { score, highScore } = this.props;

        return (
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <a class="navbar-brand" href="#">Clicky Game</a>
                <div class="nav-item">
                    You have guessed correctly!
                </div>
                <div class="nav-item">
                    Score: {score} | High Score: {highScore}
                </div>
            </nav>
        )
    }
}

export default navbar;
