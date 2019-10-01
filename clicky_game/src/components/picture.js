import React from 'react';

class Picture extends React.Component {

    render() {
        return (
            <div>
                <img src={`/imgs/${this.props.image}.jpg`} alt={this.props.image}></img>
            </div>
        );
    }
}


export default Picture;