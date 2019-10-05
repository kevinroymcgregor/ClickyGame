import React from 'react';

class Picture extends React.Component {
    
    
    render() {
        const onClick = this.props.onClick
        return (
            <div>
                <img src={`/imgs/${this.props.image}.jpg`} alt={this.props.image} onClick={() => onClick()} />
            </div>
        );
    }
}


export default Picture;