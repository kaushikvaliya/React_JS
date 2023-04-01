import React, { Component } from 'react'

export default class ClassCompojsx extends Component {
    changeDataDmFunction = () => {
        console.log("called changeDataDmFunction");
    }


    render() {


        const koidata = "Something"
        const changeData = () => {
            console.log("called");
        }


        return (

            <div>
                {koidata}
                <p>Add two number 55+45 = {55 + 45}</p>
                <button onClick={changeData}>Click</button> <br />
                <button onClick={this.changeDataDmFunction}>Click</button>
            </div>
        )
    }
}
