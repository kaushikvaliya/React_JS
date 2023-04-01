import React, { Component } from 'react'

export default class ClassCompoState extends Component {
    constructor(props) {
        super(props)
        // Set initial state
        this.state = { msg: 'Hi, There!', name: 'Kaushik' }
        // Binding this keyword
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     // Changing state
    //     this.setState({ msg: 'Welcome to the React world!' })
    // }

    handleClick = () => {
        // Changing state arrow  function
        this.setState({ msg: 'Welcome to the React world!' })
        this.setState({ name: 'valiya' })
    }

    render() {

        // render ni undar data  Changing na thai 
        // let Something = "Data"
        // const changeDataFunc = () => {
        //     console.log("called");
        //     Something = "Change"
        // }

        return (
            <div>

                {/* <button onClick={changeDataFunc}>Click</button> */}
                {/* {Something} */}

                <h2>Message :</h2>
                <p><strong>State </strong>{this.state.msg} <br /> {this.state.name}</p>

                {/* Set click handler */}
                <button onClick={this.handleClick}>
                    Click here!
                </button>
            </div>
        )
    }
}
