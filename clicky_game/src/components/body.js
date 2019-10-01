import React from 'react';
import Picture from './picture';


class Body extends React.Component {

    render() {
        return (
            <div>
                <Picture image="x-wing" />
                <Picture image="tie-fighter" />
            </div>
        );
    }
}

export default Body;