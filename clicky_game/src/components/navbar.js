import React from 'react';

class navbar extends React.Component {
    render() {
        const { score, highScore } = this.props;

        return (
            <div>
                {score} | {highScore}
            </div>
        )
    }
}

export default navbar;
