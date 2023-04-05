import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Arror extends Component {
    render() {
        return (
            <>
                <section>
                    <h1>404</h1>
                    <p>page not found</p>
                    <Link to='/'> back home</Link>
                </section>
            </>
        );
    }
}

export default Arror;