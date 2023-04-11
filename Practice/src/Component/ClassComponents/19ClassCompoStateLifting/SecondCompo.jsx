import React, { Component } from 'react';

class SecondCompo extends Component {
    inputInsideChildCompo = (e) => {
        // console.log("called inputInsideChildCompo",e);
        // console.log("called inputInsideChildCompo",e.target);
        console.log("called inputInsideChildCompo", e.target.value);
        this.props.ParentMethod(e.target.value)
    }
    render() {
        return (
            <>
                <input type="text" onChange={this.inputInsideChildCompo} name="" id="" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </>
        );
    }
}

export default SecondCompo;