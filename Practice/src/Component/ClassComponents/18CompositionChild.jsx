import React, { Component } from 'react';

class CompositionChild extends Component {
    render() {
        return (
            <div>
                <p>Child compo</p>

                {/* Inheritance */}
                {this.props.data}


                {/* Composition */}
                {this.props.children}

            </div>
        );
    }
}

export default CompositionChild;