import React, { Component } from 'react';
import SecondCompo from './SecondCompo.jsx';

class Mainfile extends Component {
    handleInputChange = (fromchild) => {

        console.log("called", fromchild);
    }
    render() {
        return (
            <>
                <SecondCompo ParentMethod={this.handleInputChange} />
            </>
        );
    }
}

export default Mainfile;