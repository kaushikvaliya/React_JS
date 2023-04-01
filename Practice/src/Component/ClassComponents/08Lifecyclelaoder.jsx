import React, { Component } from 'react';
import LoaderCompo from './09LoaderCompo';
class Lifecycle extends Component {
    constructor(props) {
        super(props);
        // Declare State with default value for loader enable disable functionalities START
        this.state = { name: "My name is kauhsik", laoder: false };
        // Declare State with default value for loader enable disable functionalities END
    }

    // componentWillReceiveProps has been renamed React

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }


    // The componentDidMount() method is called after the component is rendered.
    // render pachi ne je method called thai  tene componentDidMount() kevai

    componentDidMount() {
        // Declare State with default value for loader enable disable functionalities START
        setTimeout(() => {
            this.setState({ name: "My  surname is valiya", laoder: true })
        }, 2000)
        // Declare State with default value for loader enable disable functionalities END

    }



    // Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
    //jyare props and state ni value ke event ma jyare component refresh karva ni jarur pade tyare shouldcomponentupdate ni value true ke flase lakhva ni jarur che je thi component refresh thai che

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate");
    //     // return false
    //     return true
    // }



    // componentWillReceiveProps has been renamed React

    // componentWillReceiveProps() {
    //     console.log("componentWillReceiveProps");
    // }


    //The componentDidUpdate method is called after the component is updated in the DOM.
    // jyare component updated thai gayo hoi tyare componentDidUpdate() method called thai che
    componentDidUpdate() {
        console.log("componentDidUpdate");
        // Declare State with default value for loader enable disable functionalities START
        setTimeout(() => {
            console.log("componentDidUpdate time out");
            this.setState({ laoder: false })
        }, 4000);
        // Declare State with default value for loader enable disable functionalities END
    }

    // componentWillReceiveProps has been renamed React
    // componentWillUpdate(nextProps, nextState) {
    // }

    // mponentDidUpdate(prevProps, prevState) {
    //     console.log("mponentDidUpdate");
    // }



    render() {
        // variable declaration with diff default values and its impact
        // let HtmlDisp = null;  //variable with null value will be adopt any data with its type
        // const HtmlDisp = "";  //variable with empty value will be adopt any value with only string type
        // const HtmlDisp = 0;  //variable with empty value will be adopt any value with only number type
        // const HtmlDisp = {};   //variable with empty value will be adopt any value with only object type
        // const HtmlDisp = []; //variable with empty value will be adopt any value with only array type

        // if (this.state.laoder) {
        //     // jyare loader ni value true thase tyare loader show thase
        //     HtmlDisp = <LoaderCompo></LoaderCompo>
        // } else {
        //     // jyare loader ni value flase thase tyare data change and show thase
        //     HtmlDisp = <p>{this.state.name}</p>
        // }
        // console.log("render");

        return (
            <div>
                {/* The JSON.stringify() method is a built-in method in JavaScript that converts a JavaScript object or value to a JSON string. This is often used to send data to a server or to store data in a file. */}

                {/* {JSON.stringify(this.state.laoder)} */}
                {/* {HtmlDisp} */}

                {/* “ternary operator”  START  condition ? "true value" : "flase value" */}
                {this.state.laoder ? <LoaderCompo></LoaderCompo> : <p>{this.state.name}</p>}
                {/* “ternary operator”  end */}
            </div>
        );
    }
}

export default Lifecycle;







