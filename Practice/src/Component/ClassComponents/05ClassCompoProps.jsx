import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CustomCardStrcutre from './06CustomCardStrcutre'
import Endeavour from '../ClassComponents/endeavour.png'




class ClassCompoPropse extends Component {
    render() {

        // const codeString = `
        // import React, { Component } from 'react';  
        //     class App extends React.Component {  
        //      render() {     
        //         return (  
        //             <div>  
        //                 <h1> Welcome to { this.props.name } </h1>    
        //           </div>  
        //       );  
        //    }  
        // }  
        // export default App;  
        // `;


        const codeString = ` import React, { Component } from 'react';  
        class App extends React.Component {  
           render() {     
              return (  
                  <div>  
                    <h1> Welcome to { this.props.name } </h1>    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>         
                  </div>  
              );  
           }  
        }  
        export default App; 
        `;





        const codeString1 = `
        import React from 'react';  
        import ReactDOM from 'react-dom';  
        import App from './App.js';  

        ReactDOM.render(<App name = "JavaTpoint!!" />, 
        document.getElementById('app'));      

        `;
        return (
            <>


                <div className="row">
                    <div className="col">
                        <h2>React Props</h2>

                        <p> React Props are like function arguments in JavaScript and attributes in HTML.</p>
                        <p>  To send props into a component, use the same syntax as HTML attributes:</p>
                    </div>
                </div>

                <div className="mt-3">
                    <h2>syntax :</h2>
                    <h5>parents compoent</h5>
                    <SyntaxHighlighter className="rounded-5 mt-3" language="jsx" style={monokai}>
                        {codeString1}
                    </SyntaxHighlighter>
                    <h5>child compoent</h5>
                    <SyntaxHighlighter className="rounded-5 mt-3" language="jsx" style={monokai}>
                        {codeString}
                    </SyntaxHighlighter>





                </div>

                <h3>Example:</h3>

                <div className='row my-5'>

                    <div className="col-3">
                        <CustomCardStrcutre btntext='Endeavour' title="Endeavour" img={Endeavour} text='Ford Endeavour Price: Ford retails the full-size SUV from Rs 29.99 lakh to Rs 36.25 lakh (ex-showroom Delhi). Ford Endeavour Variants: It is available in four ...'>
                            <h2>lkjhgfdxz</h2>
                        </CustomCardStrcutre>
                    </div>
                    <div className="col-3">
                        <CustomCardStrcutre btntext='Fortuner' title="Fortuner" img="/img/toyota-fortuner.png" text='Toyota Fortuner is a 7 seater SUV available in a price range of ₹ 32.58 - 50.34 Lakh. It is available in 7 variants, 2694 to 2755 cc engine options and 2 ...'>
                        </CustomCardStrcutre>
                    </div>
                    <div className="col-3">
                        <CustomCardStrcutre btntext='G wagon' title="G wagon" text='The G Wagon is an iconic SUV with a commanding presence on road the cabin is spacious and well-appointed, with high-quality materials and modern technology ...' img='data:image/jpeg;base64,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'></CustomCardStrcutre>
                    </div>
                    <div className="col-3">
                        <CustomCardStrcutre btntext='Defender' title='Defender' text='The price of Land Rover Defender starts at Rs. 91.80 Lakh and goes upto Rs. 2.30 Cr. Land Rover Defender is offered in 28 variants - the base model of Defender ...' img={process.env.PUBLIC_URL + '/img/defender.png'}></CustomCardStrcutre>
                    </div>






                </div>
            </>



        );
    }
}

export default ClassCompoPropse;
