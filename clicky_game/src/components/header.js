import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Star Wars Clicky Game</h1>

                <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        );
    }
}

export default Header;
