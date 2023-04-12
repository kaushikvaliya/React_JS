import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

        const codeString = `class Car extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                brand: "Ford",
                model: "Mustang",
                color: "red",
                year: 1964
              };
            }
            render() {
              return (
                <div>
                  <h1>My {this.state.brand}</h1>
                  <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                  </p>
                </div>
              );
            }
          }`;
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


                <SyntaxHighlighter className="rounded-5 mt-3" language="jsx" style={atomOneDarkReasonable}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        )
    }
}
