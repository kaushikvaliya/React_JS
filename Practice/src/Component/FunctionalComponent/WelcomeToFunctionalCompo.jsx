import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const WelcomeToFunctionalCompo = () => {
    const codeString = `
    import React from 'react';
    
    const Demo=()=>
    {
    return <h1>Functional component</h1>;
    }

    export default Demo;    
    `;

    let data = "Test"
    const BtnClicked = () => {
        console.log("btn clicked");
        data = "Update"
    }
    return (
        <>
            <h2>Functional component</h2>
            <p>Functional component is just a simple javascript function; it accepts the data in the form of props and returns the react element. Whereas the class component will be created using the class keyword, and it extends the React. Component to make the class as a react component.</p>
            <p>Welcome to functional Component in reactjs</p>
            {data} <br />
            <button onClick={BtnClicked}>Click</button>
            <SyntaxHighlighter className="rounded-5 mt-3" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
};

export default WelcomeToFunctionalCompo;