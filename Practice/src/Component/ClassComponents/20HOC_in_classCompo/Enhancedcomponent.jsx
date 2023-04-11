import React, { Component } from 'react';

const Enhancedcomponent = (OriginalComponent) => {
    class NewCompon extends Component {
        clickHnadle = () => {
            console.log("called inside Enhancedcomponent");
        }
        render() {
            return <>
                <OriginalComponent clickHnadle={this.clickHnadle} />
            </>
        }
    }
    return NewCompon;
}


export default Enhancedcomponent;