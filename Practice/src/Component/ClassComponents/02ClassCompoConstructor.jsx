import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class ClassCompoConstructor extends Component {
    constructor(props) {
        super(props);
        console.log("Kaushik");
    }


    render() {

        const codeString = `constructor(props) {
            super(props);
           console.log("called con");
       }`;


        return (
            <div>
                <h3>Constructor</h3>
                <p>Constructor is a method which is invoked by default when components are called</p>
                <p>Render is also calling by default but render used for give response to the compo</p>
                <p>Constructor will use for initiate some value</p>
                <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        );
    }
}
