import React from 'react';
import Picture from './picture';


class Body extends React.Component {

    render() {
        return (
            <div>
                <Picture image="x-wing" />
                <Picture image="tie-fighter" />
                <Picture image="millenium-falcon" />
                <Picture image="death-star-2" />
                <Picture image="a-wing" />
                <Picture image="hyena-bomber" />
                <Picture image="land-speeder" />
                <Picture image="slave-one" />
                <Picture image="star-destroyer" />
                <Picture image="tie-advanced" />
                <Picture image="tie-defender" />
                <Picture image="tie-interceptor" />
            </div>
        );
    }
}

export default Body;