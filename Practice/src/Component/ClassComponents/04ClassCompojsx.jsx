import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class ClassCompojsx extends Component {
    changeDataDmFunction = () => {
        console.log("called changeDataDmFunction");
    }
    render() {

        const codeString = `import React, { Component } from 'react';  
        class App extends Component{  
           render(){  
              return(  
                 <div>  
                    <h1 className = "hello" >{25+20}</h1>  
                 </div>  
              );  
           }  
        }  
        export default App;

        outpit:45
        
        `;


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

                <SyntaxHighlighter className="rounded-5 mt-3" language="jsx" style={atomOneDarkReasonable}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        )
    }
}
