import React, { Component } from 'react';
import Enhancedcomponent from './Enhancedcomponent.jsx'

class MainCompo extends Component {
    render() {
        const { clickHnadle } = this.props
        return (
            <>
                {/* <button onClick={this.props.clickHnadle}>click</button> */}
                <button onClick={clickHnadle}>click</button>
            </>
        );
    }
}

// props = parent na data chlid mokaliya sipmle props
// parent ni method chlid ne mokali che te pan simple props

// parent ni method mokali ne aeni andar na data upadte thai rahiya che ae pacha mokalva che prant ne = statelifity


// parent ni andar thi data mokaliya child ne child ni andar ni method parent ni andar sidhi call karvi che te = high order compo

//main component ne Enhancedcomponent ni property madse
export default Enhancedcomponent(MainCompo);